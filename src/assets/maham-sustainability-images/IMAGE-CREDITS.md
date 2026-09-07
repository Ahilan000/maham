# Maham Knit Fashions — Sustainability & CSR page images

7 images, one per block on the Sustainability page. All 1200 x 900 px (4:3),
metadata stripped, progressive JPEG, quality 82 — same spec as the product set.

## Licence

All from **Pexels**, under the [Pexels Licence](https://www.pexels.com/license/):
free for commercial use, no attribution required, modification allowed. Not
permitted: reselling the photo itself as stock, or implying the people shown
endorse the brand. Source links kept below for your records.

## Files

| Block on the page | Filename | What it shows | Source |
| --- | --- | --- | --- |
| Tree Plantation Drive | `tree-plantation.jpg` | Group planting a young tree together | https://www.pexels.com/photo/5029923/ |
| Circular Economy Principles | `circular-economy.jpg` | Reclaimed fabric offcuts — textile waste for recirculation | https://www.pexels.com/photo/3778061/ |
| Global System | `global-system.jpg` | Solar array and wind turbine in an open landscape | https://www.pexels.com/photo/35105428/ |
| Human System | `human-system.jpg` | Garment workers on the floor, India | https://www.pexels.com/photo/31259217/ |
| Social System | `social-system.jpg` | Documented inspection on a production floor | https://www.pexels.com/photo/32845671/ |
| CSR — Transport | `csr-transport.jpg` | Staff boarding a company shuttle bus | https://www.pexels.com/photo/33693159/ |
| CSR — Health Camps & Blood Donation | `csr-health-camp.jpg` | Doctor examining a patient at a health camp, India | https://www.pexels.com/photo/18870282/ |

## Choices worth knowing

- **Human System** and **CSR — Health Camps** are both shot in India, which
  keeps them consistent with a Tirupur manufacturer. The Human System frame is
  a real knitwear floor — uniformed operators handling folded knits.
- **Health Camps & Blood Donation** deliberately shows a *health check*, not a
  needle. Stock blood-donation photography is almost all clinical close-ups of
  cannulas and arms, which reads as squeamish on a corporate CSR page. Say the
  word if the client wants the literal donation shot instead.
- **Circular Economy** is fabric offcuts rather than a recycling-arrows
  graphic — it ties the principle to their actual material stream.
- No visible third-party brand logos or trademarks in any of the 7.

## Wiring them in

Same pattern as the product images — every file is exactly 4:3, so
`object-fit: cover` on your placeholder box renders them without surprises:

    <img src="/images/sustainability/tree-plantation.jpg"
         alt="Team planting a tree during the annual plantation drive"
         loading="lazy" />

Note the Circular Economy panel is a full-width teal strip. A 4:3 image will
crop hard top and bottom there — if it looks tight, either set that one block
to a banner crop or run the image as a background with the teal overlaid.

## Before it goes live

No model releases come with Pexels images. Fine for illustrative section
imagery, but the copy shouldn't imply anyone pictured is a Maham employee,
or that these are photographs of Maham's own plantation drive, factory floor,
shuttle or health camp. Real photos of their actual programmes would carry far
more weight on a CSR page — treat these as the interim set.
