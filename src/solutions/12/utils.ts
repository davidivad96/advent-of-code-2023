export const countArrangements = (
  springs: string,
  groups: number[],
  cache: Map<string, number>
) => {
  const cacheKey = JSON.stringify(`${springs}-${groups}`);
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  if (springs === "") {
    return groups.length === 0 ? 1 : 0;
  }
  if (groups.length === 0) {
    return springs.includes("#") ? 0 : 1;
  }
  let result = 0;
  if (/[\.\?]/.test(springs[0])) {
    result += countArrangements(springs.slice(1), groups, cache);
  }
  if (/[\#\?]/.test(springs[0])) {
    const group = groups[0];
    if (
      group <= springs.length &&
      !springs.slice(0, group).includes(".") &&
      springs[group] !== "#"
    ) {
      result += countArrangements(
        springs.slice(group + 1),
        groups.slice(1),
        cache
      );
    }
  }
  cache.set(cacheKey, result);
  return result;
};
