import { useState } from "react";
import style from "./login.module.css";

export default function Login() {
  const [usePwd, setUsePwd] = useState(true);
  const formList = [
    {
      name: "手机号",
      placeholder: "请输入手机号",
      // verification: (e: number) => /\d{11}/.test(e.value.toString),
      type: "tel",
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

  /**
   * 处理 登录 规则：
   * usePwd -> true: fromList 显示 “密码”
   * usePwd -> false: fromList 显示 “验证码”
   */

  function handleSwitch() {
    setUsePwd(!usePwd);
  }

  return (
    <div className={style.container}>
      <div className={style.title}>手机号登录</div>
      <div className={style.formWrapper}>
        {formList.map((v) => {
          return (
            <div className={style.formItem} key={v.name}>
              <span>{v.name}</span>
              <input type={v.type ?? "text"} placeholder={v.placeholder} />
              {v.name === "手机号" && usePwd ? (
                <button className="idDisabled">获取验证码</button>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      <div className={style.switchWrapper} onClick={handleSwitch}>
        使用{usePwd ? "密码" : "验证码"}登录
      </div>
      <div className={style.btnWrapper}>
        <button className={style.loginBtn}>登 录</button>
      </div>
    </div>
  );
}
