
let objRule = {
  'input': '请输入',
  'select': "请选择",
  'date': '请选择',
  'upload': '请上传'
}


const createRule = (data) => {
  // { required: true, message: '请输入活动名称', trigger: 'blur' },
  data.forEach(el => {
    let rules_array = []
    if (el.required) {
      const rule = { required: true, message: el.message || objRule[el.type] + el.label }
      rules_array.push(rule)
      if (el.rules && el.rules.length > 0 && Array.isArray(el.rules)) {
        rules_array = rules_array.concat(el.rules)
      }
      el.rules = rules_array
    }
  });
  console.log(data)
  return data
}



export default createRule