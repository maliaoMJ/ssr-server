const router = require("koa-router")();

router.prefix("/api/users");

router.get("/", function(ctx, next) {
  ctx.body = "this is a users response!";
});
const baseInfo = [
  { id: "0001", name: "majian", pwd: "abc" },
  { id: "0002", name: "luckboy", pwd: "123" },
  { id: "0003", name: "lazykids", pwd: "234" }
];
router.get("/list", async (ctx, next) => {
  ctx.body = {
    code: 0,
    data: baseInfo
  };
});

router.post("/login", function(ctx, next) {
  const { name = "" } = ctx.request.body;
  const tempResult = baseInfo.filter(item => item.name == name);
  if (tempResult.length > 0) {
    ctx.body = {
      code: 0,
      success: true,
      pwd: tempResult[0].pwd
    };
  } else {
    ctx.body = {
      code: 0,
      success: false,
      errorMsg: "no data"
    };
  }
});
router.post("/exit", async (ctx, next) => {
  const { pwd = "" } = ctx.request.body;
  const tempResult = baseInfo.filter(item => item.pwd == pwd);
  if (tempResult.length > 0) {
    ctx.body = {
      code: 0,
      success: true,
      name: tempResult[0].name
    };
  } else {
    ctx.body = {
      code: 0,
      success: false,
      errorMsg: "exit failure!"
    };
  }
});
router.get("/info", async (ctx, next) => {
  const { pwd = "" } = ctx.request.body;
  const tempResult = baseInfo.filter(item => item.pwd == pwd);
  if (tempResult.length > 0) {
    ctx.body = {
      code: 0,
      success: true,
      info: tempResult[0]
    };
  } else {
    ctx.body = {
      code: 0,
      success: false,
      errorMsg: "get item info detail failure!"
    };
  }
});
module.exports = router;
