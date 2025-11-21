
import { FaFacebookSquare,FaInstagram } from "react-icons/fa";

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
      return <FaInstagram className={className} fill={fill} />
    case 'facebook':
      return <FaFacebookSquare className={className} fill={fill} />
    default:
      return null
  }
}

