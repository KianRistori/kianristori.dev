export const createOgImage = ({
  title,
  meta,
}: {
  title: string
  meta: string
}) =>
  [
    // ACCOUNT PREFIX
    // Add your own Cloudinary account ID.
    `https://res.cloudinary.com/dk8lnfjpm/image/upload`,
    // Composed Image Transformations
    `w_1600,h_836,q_100`,

    // TITLE
    // Karla google font in light rose
    `l_text:Karla_72_bold:${e(title)},co_rgb:ffe4e6,c_fit,w_1400,h_240`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_180`,

    // META
    // Karla, but smaller
    `l_text:Karla_48:${e(meta)},co_rgb:ffe4e680,c_fit,w_1400`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_100`,

    // PROFILE IMAGE
    // dynamically fetched from my twitter profile
    `l_twitter_name:kianristori`,
    // Transformations
    `c_thumb,g_face,r_max,w_380,h_380,q_100`,
    // Positioning
    `fl_layer_apply,w_140,g_north_west,x_100,y_100`,

    // BG
    `grain-gradient_ifwva1.png`,

].join("/")

// double escape for commas and slashes
const e = (str: string) => encodeURIComponent(encodeURIComponent(str))

//https://res.cloudinary.com/dk8lnfjpm/image/upload/v1677936899/blog/w_1600,h_836,q_100/grain-gradient_lgkosx.png

//https://res.cloudinary.com/delba/image/upload/w_1600,h_836,q_100/l_text:Karla_72_bold:Open%2520Graph%2520Images%253A%2520Automatically%2520Generate%2520OG%2520Images%2520From%2520Post%2520Content,co_rgb:ffe4e6,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_100,y_180/l_text:Karla_48:delba.dev%2520%25C2%25B7%2520Jul%25205,co_rgb:ffe4e680,c_fit,w_1400/fl_layer_apply,g_south_west,x_100,y_100/l_twitter_name:delba_oliveira/c_thumb,g_face,r_max,w_380,h_380,q_100/fl_layer_apply,w_140,g_north_west,x_100,y_100/grain-gradient.png

//https://res.cloudinary.com/dk8lnfjpm/image/upload/v1677938091/grain-gradient_ifwva1.png
