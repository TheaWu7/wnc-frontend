import style from "./register.module.css";

export default function Register() {
  const formList = [
    {
      name: "昵称",
      placeholder: "请输入昵称",
      type: "tel",
    },
    {
      name: "手机号",
      placeholder: "请输入手机号",
      // verification: (e: number) => /\d{11}/.test(e.value.toString),
    },
    {
      name: "验证码",
      placeholder: "请输入验证码",
    },
    {
      name: "密码",
      placeholder: "请输入密码",
      type: "password",
    },
  ];
  return (
    <div className={style.container}>
      <header className={style.title}>用手机号注册</header>
      <div className={style.upload}>
        <input type="file" style={{ display: "none" }} />
        <img src="/assets/register.svg" alt="register" width="42px" />
      </div>
      <div className={style.formWrapper}>
        {formList.map((v) => {
          return (
            <div className={style.formItem} key={v.name}>
              <span>{v.name}</span>
              <input type={v.type ?? "text"} placeholder={v.placeholder} />
              {v.name === "手机号" ? <button className="idDisabled">获取验证码</button> : ""}
            </div>
          );
        })}
      </div>
      <div className={style.btnWrapper}>
        <button className={style.registerBtn}>注 册</button>
      </div>
    </div>
  );
}
