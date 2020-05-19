export const pagination = (list, page = 1) => {
  if (!list) return null
  const count = list.length
  const cnt = 5
  const total_page = Math.ceil(count / cnt);
  return {
    list : list.slice(((page - 1) * cnt), (page * cnt)),
    current_page : page,
    total_page,
    count : Array.from(Array(total_page).keys())
  }
}
