// import {SalePage} from "./SalePage";
// import {Offer} from "./Offer";
import {Image} from "./Image";
import Model from "./Model";
// import {Country} from "./Country";

export class Domain {

  static DOMAIN_BRAND_TYPE = 'brand'
  static DOMAIN_GENERAL_TYPE = 'general'
  static DOMAIN_COUNTRY_TYPE = 'country'

  DomainId = {
    fieldName: 'domain_id',
    fieldTitle: 'Domain id',
    content: null
  }
  DomainName = {
    fieldName: 'domain_name',
    fieldTitle: 'Domain name',
    content: null
  }
  DomainUserID = {
    fieldName: 'user_id',
    fieldTitle: 'Domain user id',
    content: null
  }
  DomainBelongType = {
    fieldName: 'domain_belong_type',
    fieldTitle: 'Domain type',
    content: null
  }
  DomainIsDefault = {
    fieldName: 'domain_is_default',
    fieldTitle: 'Domain is default',
    content: null
  }
  DomainTitle = {
    fieldName: 'domain_title',
    fieldTitle: 'Domain Title',
    content: null
  }
  DomainEmail = {
    fieldName: 'domain_contact_email',
    fieldTitle: 'Domain Contact Email',
    content: null
  }
  DomainLogo = {
    fieldName: 'domain_logo',
    fieldTitle: 'Domain Logo',
    content: null
  }
  DomainFavicon = {
    fieldName: 'domain_favicon',
    fieldTitle: 'Domain Favicon',
    content: null
  }
  DomainDNS = {
    fieldName: 'domain_dns',
    fieldTitle: 'Domain Dns',
    content: null
  }
  DomainSSL = {
    fieldName: 'domain_ssl',
    fieldTitle: 'Domain Ssl',
    content: null
  }
  DomainType = {
    fieldName: 'domain_type',
    fieldTitle: 'Domain Type',
    content: null
  }
  // DomainSalePages = {
  //   fieldName: 'domain_sale_pages',
  //   fieldTitle: 'Domain Sale Pages',
  //   model: SalePage,
  //   content: null
  // }
  // DomainActiveSalePages = {
  //   fieldName: 'domain_active_sale_pages',
  //   fieldTitle: 'Domain Sale Pages',
  //   model: SalePage,
  //   content: []
  // }
  // DomainActiveOffers = {
  //   fieldName: 'domain_active_offers',
  //   fieldTitle: 'Domain active offers',
  //   model: Offer,
  //   content: []
  // }
  DomainLogoGallery = {
    fieldName: 'domain_logo_gallery',
    fieldTitle: 'Domain logo gallery',
    model: Image,
    content: null
  }
  DomainFaviconGallery = {
    fieldName: 'domain_favicon_gallery',
    fieldTitle: 'Domain favicon gallery',
    model: Image,
    content: null
  }
  DomainPrimaryColor = {
    fieldName: 'domain_primary_color',
    fieldTitle: 'Domain primary color',
    content: null
  }
  DomainSecondaryColor = {
    fieldName: 'domain_secondary_color',
    fieldTitle: 'Domain secondary color',
    content: null
  }
  DomainCountryID = {
    fieldName: 'domain_type_country_id',
    fieldTitle: 'Domain country id',
    content: null
  }
  // DomainCountry = {
  //   fieldName: 'domain_type_country',
  //   fieldTitle: 'Domain country',
  //   model: Country,
  //   content: null
  // }
  DomainGoogleVerificationString = {
    fieldName: 'google-verification-string',
    content: null
  }
  DomainFacebookVerificationString = {
    fieldName: 'facebook-verification-string',
    content: null
  }

  // getDomainCountry() {
  //   return this.DomainCountry?.content
  // }

  primaryColor() {
    return this.DomainPrimaryColor?.content
  }

  secondaryColor() {
    return this.DomainSecondaryColor?.content
  }

  isSSL() {
    return this.DomainSSL?.content
  }

  isBrand() {
    return this.DomainType?.content === Domain.DOMAIN_BRAND_TYPE
  }

  isCountry() {
    return this.DomainType?.content === Domain.DOMAIN_COUNTRY_TYPE
  }

  isGeneral() {
    return this.DomainType?.content === Domain.DOMAIN_GENERAL_TYPE
  }

  // getFirstActiveSalePage() {
  //   return this.DomainActiveSalePages?.content?.[0]
  // }
  //
  // getActiveOffers() {
  //   return (this.isCountry()
  //     ? this.DomainCountry?.content?.CountryOffers?.content
  //     : this.DomainActiveOffers?.content) ?? []
  // }
}

export default Domain
