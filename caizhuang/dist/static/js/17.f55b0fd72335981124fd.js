webpackJsonp([17],{"8tVx":function(t,s){},iyWl:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={data:function(){return{userInfo:JSON.parse(localStorage.getItem("userdata"))}},created:function(){console.log(this.userInfo)}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"my-acc"},[e("div",{staticClass:"top-title"},[t._v(" 您的基础信息")]),t._v(" "),e("div",{staticClass:"contenx-acc"},[e("div",{staticClass:"user-text"},[t._v("\n        会员名："+t._s(t.userInfo.userName)+"\n      ")]),t._v(" "),e("div",{staticClass:"user-text"},[t._v("\n        昵称："+t._s(t.userInfo.realName)+"\n      ")]),t._v(" "),e("div",{staticClass:"user-text"},[t._v("\n        绑定手机："+t._s(t.userInfo.mobile)+"\n      ")])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"top-title"},[t._v(" 您的安全服务")]),t._v(" "),e("div",{staticClass:"center-box"},[e("div",[t.userInfo.userName?e("div",[t._v("已完成")]):t._e()]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),e("div",{staticClass:"center-box"},[e("div",[t.userInfo.password?e("div",[t._v("已设置")]):t._e(),t._v(" "),t.userInfo.password?t._e():e("div",{staticClass:"no-text"},[t._v("未设置")])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("div",[e("router-link",{staticClass:"no-caolor",attrs:{to:"/home/mySetting/updatePassword"}},[t.userInfo.password?e("p",{staticClass:"a"},[t._v("修改")]):t._e()]),t._v(" "),t.userInfo.password?t._e():e("p",{staticClass:"a"},[t._v("设置")])],1)]),t._v(" "),e("div",{staticClass:"center-box"},[e("div",[t.userInfo.passwordQuestion?e("div",[t._v("已设置")]):t._e(),t._v(" "),t.userInfo.passwordQuestion?t._e():e("div",{staticClass:"no-text"},[t._v("未设置")])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("div",[t.userInfo.passwordQuestion?e("p",[t._v("ok")]):t._e(),t._v(" "),e("router-link",{staticClass:"no-caolor",attrs:{to:"/home/mySetting/updateAccount"}},[t.userInfo.passwordQuestion?t._e():e("p",{staticClass:"a"},[t._v("设置")])])],1)]),t._v(" "),e("div",{staticClass:"center-box"},[e("div",[t.userInfo.userName?e("div",[t._v("已绑定")]):t._e()]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("div",[e("router-link",{staticClass:"no-caolor",attrs:{to:"/home/mySetting/updateAccount"}},[e("p",{staticClass:"a"},[t._v("修改")])])],1)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("p",[this._v("身 份 认 证")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"text-p"},[s("p",[this._v(" 用于提升账号的安全性和信任级别。认证后的有卖家记录的账号不能修改认证信息。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("p",[this._v("ok")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("p",[this._v("登录密码")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"text-p"},[s("p",[this._v(" 安全性高的密码可以使账号更安全。建议您定期更换密码，且设置一个包含数字和字母，并长度超过6位以上的密码。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("p",[this._v("密保问题")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"text-p"},[s("p",[this._v(" 是您找回登录密码的方式之一。建议您设置一个容易记住，且最不容易被他人获取的问题及答案，更有效保障您的密码安全。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[this._v("绑定手机"),s("p")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"text-p"},[s("p",[this._v("绑定手机后，您即可享受XX彩妆丰富的手机服务，帮助你更好的在这个平台购物。")])])}]};var r=e("VU/8")(i,a,!1,function(t){e("8tVx")},"data-v-c141ea1c",null);s.default=r.exports}});
//# sourceMappingURL=17.f55b0fd72335981124fd.js.map