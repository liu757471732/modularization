
// 验证规则
const reg_phone = /^1[3|4|5|7|8][0-9]\d{8}$/
// 手机号验证
export const validatePhone = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('手机号不能为空'))
  } else if (!reg_phone.test(value)) {
    callback(new Error('手机号格式错误'))
  } else {
    callback()
  }
}