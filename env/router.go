package env

import (
	"net/http"

	"github.com/astaxie/beego/session"
	"github.com/go-martini/martini"
	"github.com/martini-contrib/cors"
	"github.com/martini-contrib/render"
)

//Router 路由
var Router *martini.ClassicMartini

func initRouter() {
	Router = martini.Classic()

	// 注册全局mongo数据库服务
	Router.Map(MgoOpInst)

	// 注册全局渲染器
	Router.Use(render.Renderer(render.Options{
		Directory:  GetConfig("assets") + "/template", // Specify what path to load the templates from.
		Extensions: []string{".tmpl", ".html"},        // Specify extensions to load for templates.
		Charset:    "UTF-8",                           // Sets encoding for json and html content-types. Default is "UTF-8".
		IndentJSON: true,                              // Output human readable JSON
	}))
	Router.Use(cors.Allow(&cors.Options{
		AllowOrigins:     []string{"http://localhost:3001", "http://www.caoyongzheng"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowHeaders:     []string{"token", "Content-Type"},
		AllowCredentials: true,
	}))
	// 回话管理
	Router.Use(func(w http.ResponseWriter, r *http.Request, c martini.Context) {
		sess, _ := Sessions.SessionStart(w, r)
		defer sess.SessionRelease(w)
		c.MapTo(sess, (*session.Store)(nil))
		c.Next()
	})
}
