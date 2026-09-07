# Maham Knit Fashions — Product Portfolio Images

14 images, one per card on the Products page. All 1200 x 900 px (4:3), stripped
of metadata, progressive JPEG, quality 82 — drop-in ready for the product grid.

## Licence

Every image is from **Pexels** and is covered by the [Pexels
Licence](https://www.pexels.com/license/): free for commercial use, no
attribution required, modification allowed. Not permitted: reselling the
photo itself as stock, or implying the people shown endorse the brand.
Source links below are kept for your records.

## Files

| Card on the page | Filename | Shot type | Source |
| --- | --- | --- | --- |
| Newborn | `newborn.jpg` | Flat-lay | https://www.pexels.com/photo/32410090/ |
| Infants & Toddlers | `infants-toddlers.jpg` | On-model | https://www.pexels.com/photo/18862066/ |
| Boys & Girls | `boys-girls.jpg` | On-model | https://www.pexels.com/photo/5560083/ |
| Men & Women | `men-women.jpg` | On-model | https://www.pexels.com/photo/8217299/ |
| Athleisure | `athleisure.jpg` | On-model | https://www.pexels.com/photo/36725930/ |
| Performance Wear | `performance-wear.jpg` | On-model | https://www.pexels.com/photo/4853103/ |
| Innerwear/Underwear | `innerwear-underwear.jpg` | Flat-lay | https://www.pexels.com/photo/9594141/ |
| Sportswear | `sportswear.jpg` | On-model | https://www.pexels.com/photo/6203642/ |
| Sleepwear | `sleepwear.jpg` | On-model | https://www.pexels.com/photo/8416232/ |
| Beachwear | `beachwear.jpg` | On-model | https://www.pexels.com/photo/28663054/ |
| Yoga Wear | `yoga-wear.jpg` | On-model | https://www.pexels.com/photo/7880195/ |
| Maternity | `maternity.jpg` | On-model | https://www.pexels.com/photo/20770621/ |
| Bed (Accessories & Home) | `bed.jpg` | Product | https://www.pexels.com/photo/31902663/ |
| Towel (Accessories & Home) | `towel.jpg` | Product | https://www.pexels.com/photo/45980/ |

`bed.jpg` and `towel.jpg` are extras — those two cards are currently
text-only on the page, but they are part of the portfolio so images are
included in case you want to promote them into the grid.

## Wiring them in

Copy the folder into the site's public assets (e.g. `public/images/products/`)
and reference by filename, keeping the 4:3 box the placeholders already use:

    <img src="/images/products/newborn.jpg" alt="Newborn knitwear" loading="lazy" />

Every file already sits at exactly 4:3, so `object-fit: cover` on the existing
placeholder box will render them with no cropping surprises.

## Notes before this goes live

- No visible third-party brand logos or trademarks in any of the 14 shots.
- No model releases are supplied with Pexels images. That is fine for
  editorial-style category tiles, but avoid implying any person pictured is a
  Maham customer, employee or endorser.
- These are stock stand-ins. Real factory and product photography will always
  outperform them on a manufacturer's site — treat this as the interim set.
