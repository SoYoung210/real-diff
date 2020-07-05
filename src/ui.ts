import * as $ from "jquery";

export function apply() {
  setTimeout(() => {
    const diffStat =
      Number($("#diffstat .text-green").text().trim().replace(/,/g, ''))
      + Math.abs(Number($("#diffstat .text-red").text().trim().replace(/,/g, '').replace('−','')));
    const packageLockDiff = $("div[data-path='package-lock.json'] span.diffstat").text().replace(/,/g, '')
    const realDiff = diffStat - Number(packageLockDiff);
    console.log('@@ realDiff', realDiff)
    $("#diffstat").parent().append(`
      <span style='
      color: #2468A5;
      font-weight: bold;
      '>
        realDiff: ${realDiff}
      </span>`
    )
  }, 2000)
}
