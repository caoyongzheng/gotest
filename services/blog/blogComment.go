package blog

import (
	"net/http"
	"strconv"

	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"

	"github.com/caoyongzheng/goserver/context"
	"github.com/caoyongzheng/goserver/env"
	"github.com/caoyongzheng/goserver/model"
	"github.com/caoyongzheng/goserver/model/entity"
	"github.com/caoyongzheng/goserver/services/user/auth"
	"github.com/go-martini/martini"
	"github.com/martini-contrib/binding"
	"github.com/martini-contrib/render"
)

func init() {
	env.R.Group("/api/blogComment", func(r martini.Router) {
		r.Post("", auth.RequireUser, binding.Bind(PostComment{}), verifyAddComment, AddComment)
		r.Get("", verifyPageQuery, Get)
	})
}

//PostComment 添加评论
type PostComment struct {
	model.Comment
	BlogID string `json:"blogId" form:"blogId"`
}

//AddComment 添加评论
func AddComment(pc PostComment, ctx *context.Context, r render.Render, req *http.Request) {
	u := ctx.GetUser()
	pc.UserID = u.ID
	newC, err := entity.AddCommont(pc.BlogID, pc.Comment)
	if err != nil {
		r.JSON(200, model.NewResult(false, 0, "新增评论失败", nil))
	}
	r.JSON(200, model.NewResult(true, 0, "新增评论成功", newC))
}

func verifyAddComment(pc PostComment, req *http.Request, r render.Render) {
	if pc.Content == "" {
		r.JSON(200, model.NewResult(false, 0, "评论不能为空", nil))
	}
	exist := entity.IsExist(pc.BlogID)
	if !exist {
		r.JSON(200, model.NewResult(false, 0, "博客不存在", nil))
		return
	}
}

//Comment 评论
type Comment struct {
	model.Comment
	HeaderIcon string `json:"headerIcon"`
	Name       string `json:"name"`
}

//Get 获取博客评论
func Get(r render.Render, req *http.Request, mgoOp *env.MgoOp) {
	blogID := req.URL.Query().Get("blogId")
	page, _ := strconv.Atoi(req.URL.Query().Get("page"))
	pagesize, _ := strconv.Atoi(req.URL.Query().Get("pagesize"))

	bc, _ := entity.GetPage(blogID, page, pagesize)
	data := make(map[string]interface{})
	comments := make([]Comment, len(bc.Comments))
	for i, ct := range bc.Comments {
		comments[i].Comment = ct
		var u entity.User
		mgoOp.WithC("User", func(c *mgo.Collection) {
			c.FindId(ct.UserID).Select(bson.M{"headerIcon": 1, "username": 1}).One(&u)
		})
		comments[i].HeaderIcon = u.HeaderIcon
		comments[i].Name = u.Username
	}
	data["size"] = bc.Size
	data["comments"] = comments
	r.JSON(200, model.NewResult(true, 0, "", data))
}

func verifyPageQuery(r render.Render, req *http.Request) {
	blogID := req.URL.Query().Get("blogId")
	if blogID == "" {
		r.JSON(200, model.NewResult(false, 0, "博客id不能为空", nil))
		return
	}

	page, err := strconv.Atoi(req.URL.Query().Get("page"))
	if err != nil {
		r.JSON(200, model.NewResult(false, 0, err.Error(), nil))
		return
	}
	if page < 1 {
		r.JSON(200, model.NewResult(false, 1, "page不能小于1", nil))
		return
	}
	pagesize, err := strconv.Atoi(req.URL.Query().Get("pagesize"))
	if err != nil {
		r.JSON(200, model.NewResult(false, 2, err.Error(), nil))
		return
	}
	if pagesize < 1 {
		r.JSON(200, model.NewResult(false, 3, "page不能小于1", nil))
		return
	}
}
