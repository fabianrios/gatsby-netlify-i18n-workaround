import CMS from "netlify-cms"

import HomePagePreview from "./preview-templates/HomePagePreview"
import AboutPagePreview from "./preview-templates/AboutPagePreview"
import BlogPagePreview from "./preview-templates/BlogPagePreview"

CMS.registerPreviewTemplate("index-en", HomePagePreview)
CMS.registerPreviewTemplate("index-de", HomePagePreview)

CMS.registerPreviewTemplate("about-en", AboutPagePreview)
CMS.registerPreviewTemplate("about-de", AboutPagePreview)

CMS.registerPreviewTemplate("blog-en", BlogPagePreview)
CMS.registerPreviewTemplate("blog-de", BlogPagePreview)
