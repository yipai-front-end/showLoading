/**
 * 请提示
 */
export declare function showLoading(params?: {
  /**
   * 提示文字
   */
  title: string
  /**
   * 是否存在蒙版
   */
  mask?: boolean
}): {
  /**
   * 关闭弹窗
   */
  close: () => void
}