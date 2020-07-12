export const formatNumber = (value, locale = "en-US", options = {style: "decimal"}) => new Intl.NumberFormat(locale, options).format(value);


