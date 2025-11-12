import { Instagram, Facebook } from 'lucide-react'

type SocialItem = {
  href?: string
  title?: string
}

export function renderSocialIcon(
  item: SocialItem,
  className: string,
  fill: string
) {
  if (!item?.href) return 

  switch (item.title?.toLowerCase()) {
    case 'instagram':
      return <Instagram className={className} fill={fill} />
    case 'facebook':
      return <Facebook className={className} fill={fill} />
    default:
      return null
  }
}

