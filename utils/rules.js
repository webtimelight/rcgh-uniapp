const rules = {
  // 判断值是否为空
  isNull(value) {
    if (value=='' || value==null || value==undefined) {
      return true
    }
    return false
  },