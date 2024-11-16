/**
 * 获取基础路径
 */
export const getBaseUrl = () => import.meta.env.BASE_URL;

/**
 * 生成完整路径
 * @param path - 相对路径
 * @returns 带有基础路径的完整路径
 */
export const getFullPath = (path: string) => {
  const baseUrl = getBaseUrl();
  // 移除开头的斜杠以避免双斜杠
  const cleanPath = path.replace(/^\//, '');
  return `${baseUrl}/${cleanPath}`;
};

/**
 * 检查是否是首页
 * @param currentPath - 当前路径
 * @returns 是否是首页
 */
export const isHomePage = (currentPath: string) => {
  const baseUrl = getBaseUrl();
  return currentPath === baseUrl || currentPath === baseUrl + '/';
}; 