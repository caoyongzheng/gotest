package user

import (
	"github.com/caoyongzheng/gotest/env"
	"github.com/caoyongzheng/gotest/model/entity"
	"github.com/caoyongzheng/gotest/services/user/auth"
	"github.com/go-martini/martini"
	"github.com/martini-contrib/binding"
)

func init() {
	env.Router.Group("/api/user", func(r martini.Router) {
		r.Post("/signin", binding.Bind(entity.User{}), SignIn) //用户登录
		r.Post("/signup", binding.Bind(entity.User{}), SignUp) //用户注册
		r.Get("/signout", SignOut)                             //用户登出
		r.Get("/session/user", GetSessionUser)                 //获取当前会话的用户
		r.Put("/headerIcon", auth.Great(1), SetHeaderIcon)     //设置用户的头像
		r.Get("/sessionuser", getSessionUser)                  // 获取当前会话的用户
	})
}
