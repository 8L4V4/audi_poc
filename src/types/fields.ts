export type iLinkField = {
  href: string,
  title: string,
}

export interface iPictureField {
  url: string,
  [k: string]: any
}

export interface iButtonField {
  type: string,
  title: string,
  link: iLinkField,
  action: {
    name: string,
    content: string,
  },
}