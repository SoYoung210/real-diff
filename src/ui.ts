import * as $ from "jquery";

export function apply() {
  setTimeout(() => {
    const diffStat =
      Number($("#diffstat .text-green").text().trim().replace(/,/g, ''))
      + Math.abs(Number($("#diffstat .text-red").text().trim().replace(/,/g, '').replace('−','')));
    const packageLockDiff = $("a:contains(package-lock.json)").text();
    const realDiff = diffStat - Number(packageLockDiff);
    console.log('@@ realDiff', realDiff)
  }, 2000)
}
