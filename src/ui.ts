import * as $ from "jquery";

export function apply() {
  console.log('love')
  setTimeout(() => console.log('package lock a',$(`div[data-path="package-lock.json"]`))
    ,3000
  )
  const packageLockDiff = $("a:contains(package-lock.json)").text();
  console.log('packageLockDiff',packageLockDiff)
  const diffStat =
    Number($("#diffstat .text-green").text().trim().replace(/,/g, ''))
    + Math.abs(Number($("#diffstat .text-red").text().trim().replace(/,/g, '').replace('−','')));
  console.log('@@ diffStat', diffStat)
  // 1. Apply narrow navbar with container-xl (max-width)
  // $("#diffstat").clone().appendTo('span')
}
// −
// -