angular.module("ct.config", [])

.constant("APP_PROPERTIES", {
	"state.base.path": "/",
	"state.login.base": "login",
	"state.login.success": "trade",
	"state.login.fail": "login.fail",
	"api.url.base": "http//localhost:3000/api"
})

;