import { expect, test } from '@playwright/test'

import { getStyles } from './utils'

test.beforeEach(async ({ page }) => {
  await page.goto('/?test=StyledRNW')
})

test(`RNW + styled() + styleable() twice`, async ({ page }) => {
  const inputStyles = await getStyles(page.locator('#styled-rnw-input'))
  expect(inputStyles.fontFamily).toBe(
    `Silkscreen, "Fira Code", Monaco, Consolas, "Ubuntu Mono", monospace`
  )
  expect(inputStyles.paddingLeft).toBe(`14px`)
  expect(inputStyles.paddingTop).toBe(`12px`)
})
