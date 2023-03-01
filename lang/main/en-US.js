import aboutContentEn from "../abouUs/en-US";
import returnAndShipContentEn from "../returnPolicy/en-US";
import refundPolicyEn from "../refundPolicy/en-US";
import termsOfServiceEn from "../termsofService/en-US";
import privacyPolicyEn from "../privacyPolicy/en-US";
import faqEn from "../faq/en-US";

export default {
  globals: {
    SalePageNotFound: 'Sorry! Sale page not found.'
  },
  main_page: {
    customer_server_block: {
      title: 'The Best customer service',
      content: 'Our customer service team is always here to answer your questions and help you with your order, as well as in the after sale.<br><br>' +
        'We do our best to answer all of our customers in less than 24 hours. If you have any questions, please contact us from <a href="/contact">this page</a>'
    },
    amazing_buy_journey: {
      title: 'Amazing delivery experience',
      content: 'You can place your order in our store with peace of mind, we partnered with the best couriers in {country} to provide you with fast delivery time of 2 to 5 days, and safe payment method by cash on delivery.\n'
    }
  },
  // validation
  Validation: {
    required: '{field} is required.',
    min: {
      string: '{field} must be at least {min} characters.',
      numeric: '{field} must be at least {min}'
    },
    max: {
      string: '{field} must not be greater that {max} characters.',
      numeric: '{field} must not be greater that {max}.'
    },
    numeric: '{field} must be a number.',
    email: '{field} must be an email.',
    digits_between: '{field} must be between {min} and {max} digits.',
    between: {
      string: '{field} must be between {min} and {max} characters.',
      numeric: '{field} must be between {min} and {max}.'
    }
  },

  // header
  Home: 'Home',
  Products: 'Products',
  TermsOfService: 'Terms of Service',
  PrivacyPolicy: 'Privacy Policy',
  ShippingAndReturn: 'Shipping and Return',
  FAQ: 'FAQ',
  Contact: 'Contact',
  ContactUs: 'Contact us',
  About: 'About us',
  Refund: 'Refund Policy',
  AboutUsContent: aboutContentEn,
  RefundContent: refundPolicyEn,
  FaqContent: faqEn,
  LegalPages: 'Legal pages',
  Informations: 'Informations',
  HomePageMain: {
    FirstLine: 'Amazing online shopping experience!',
    Bullets: {
      BulletOne: 'High quality products',
      BulletTwo: 'Incredible discounts',
      BulletThree: 'Fast delivery times',
    },
    SecondLine: 'Don’t hesitate! You will love our products',
    ShopNowBtn: 'Shop now'
  },
  PaymentProcedureFailed: 'Payment procedure failed, please try again later.',
  NoOfferInYourCountry: 'Sorry! No offers in {country} yet',
  HomePageAboutUs: {
    title: 'ABOUT US',
    content: '{store_name} is an online store in {country} specializing in innovative products and accessories that' +
      ' will make your daily life easier and a lot more fun.<br>' +
      'We try our best to provide quality support, and faster shipping times to our customers. We promise to process' +
      ' your orders in less than 24h, and to answer all your questions on time.<br>' +
      'We are happy to welcome you in our store, fell free to place orders any time :) Your satisfaction is our Goal.',
  },
  HomePageAmazingDelivery: {
    Title: 'Amazing delivery experience',
    Content: 'You can place your order in our store with peace of mind, we partnered with the best couriers in {country} to provide you with fast delivery time of 2 to 5 days, and safe payment method by cash on delivery.\n'
  },
  HomePageSatisfaction: {
    Title: '100% Satisfaction Guarantee',
    Content: {
      Text: 'We offer free shipping on all products, and we give you 30 days of guarantee.',
      Figures: {
        FigureOne: 'Free Shipping',
        FigureTwo: 'Trusted Site',
        FigureThree: 'Secure Checkout',
        FigureFour: 'Fast Customer Support',
      }
    }
  },
  HomePageDoYouHaveQuestion: {
    Title: 'Do you have other questions?',
    Content: 'Visit the contact page, and send us your message. We try our best to answer all our customers in less than 24h'
  },
  HomePageFooter: {
    PaymentByCash: 'Payment by Cash on Delivery',
    FreeShipping: '<strong>Free Shipping, and Fast Delivery <span class="font-weight-bold" style="white-space: nowrap">( 2 to 5 days )</span></strong>',
    SecurePayment: 'Secure payment'
  },
  DiscoverOurProducts: 'Discover our products',

  // footer
  CopyRight: 'Copyright © 2020-{current_year} {brand_name}.</br> All Rights Reserved.',
  FooterDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur impedit incidunt ipsam " +
    "molestias repellat repellendus sequi tempora. Asperiores beatae consectetur delectus eius error eveniet " +
    "explicabo, fugiat illo ipsa, minus molestiae non pariatur quasi quo ullam voluptatem voluptates? Ad adipisci" +
    "consequuntur debitis eaque eveniet ex molestias, odio sapiente! In, quaerat.",
  StepOne: 'Step 1:',
  SelectQuantity: 'Select quantity',
  TotalPrice: 'Total Price',
  StepTwo: 'Step 2:',
  StepThree: 'Step 3:',
  DeliveryInfo: 'Delivery info in <strong>{country}</strong>',
  StepThreeText: 'Payment info',
  HowManyUnits: 'How many units you want ?<br> Buy more to Save more !',
  OrderForm: {
    FullName: {
      title: 'Name',
      placeholder: 'Name'
    },
    Mobile: {
      title: 'Mobile',
      placeholder: 'Mobile'
    },
    CardNumber: {
      title: 'Card number',
      placeholder: '1234 1234 1234 1234'
    },
    CardExpiry: {
      title: 'Card expiry',
      placeholder: 'year / month'
    },
    CardCvc: {
      title: 'CVC',
      placeholder: 'CVC'
    },
    Address: {
      title: 'Address',
      placeholder: 'Home number, Street, District, City, Region'
    },
    PostalCode: {
      title: 'Zip Code',
      placeholder: 'Zip Code (Postal code)'
    },
    City: {
      title: 'City',
      placeholder: 'City'
    },
    Country: {
      title: 'Country',
      placeholder: 'Country'
    },
    Region: {
      title: 'Region',
      select: 'Select your region',
      placeholder: 'Region'
    },
    Email: {
      title: 'Email (optional)',
      placeholder: 'Email'
    },
  },
  Qt: 'Quantity',
  // terms of service
  TermOfServiceSubTitle: 'please read our terms of service here.',
  TermOfServiceContent: termsOfServiceEn,
  last_updated: 'Last Updated',
  PrivacyPolicySubTitle: 'your privacy is our concern please read our privacy policy here.',
  PrivacyPolicyContent: privacyPolicyEn,
  ShippingAndReturnSubTitle: 'if you have a product you want to return or know about our shipping procedure, please read our policy here.',
  ShippingAndReturnContent: returnAndShipContentEn,
  //contact us
  ContactSubtitle: 'We try our best to answer all our customers in less than 24h. ' +
    'If you have any questions please contact us from this form. Or you can send us email to: <strong>{domain}</strong> ' +
    'If you are contacting us about your order, please mention your order number or the full name of the buyer in your message.',
  ContactForm: {
    Name: 'Name',
    Subject: 'Subject',
    Email: 'Email',
    Content: 'Content'
  },
  SendBtn: 'Send',
  UpsellAttention: 'ATTENTION: This is a one time offer!',
  SpecialOffer: 'Special Offer',
  UpsellP1: '<strong>{discount} discount to our new customers<strong>',
  UpsellP2: 'We have received your order and we want to thank you and welcome you for being a new customer.',
  UpsellP3: 'We offer a generous <strong>{discount}</strong> discount to our new customers',
  UpsellP4: 'If you add another <strong>{offerName}</strong> to your order you can get it at <strong>{discount} discount</strong>',
  UpsellP5: 'The price of additional <strong>{offerName}</strong> is only <strong style="white-space: nowrap">{offerSalePrice} {offerSalePricePrefix}</strong> You can add 1 or more to your order at this price',
  UpsellP6: '<strong>Can you accept this special offer ?</strong>',
  Price: 'Price',
  YesConfirm: 'YES! Add to my order',
  NoConfirm: 'No, Im not interested',
  PayOnDelivery: 'Pay by Cash On Delivery',
  CrossSellP1: '<strong>{discount} discount to our new customers</strong>',
  CrossSellP2: 'We have received your order and we want <strong>to suggest another product</strong> ' +
    'that could be also <strong>very interesting</strong> to you at this <strong>discounted price</strong>.',
  CrossSellP3: '<strong>We offer a generous {discount} discount to our new customers</strong>',
  CrossSellP4: 'If you add <strong>{offerName}</strong> to your order you can get it at <strong>{discount} discount</strong>',
  CrossSellP5: 'The discounted price of <strong>{offerName}</strong> is only <strong style="white-space: nowrap">{salePrice} {currency}</strong> You can add 1 or more to your order at this price',
  CrossSellP6: '<strong>Can you accept this special offer ?</strong>',
  WhatHowItWorks: 'What Is it And How Does It Work ?',
  UpsellWarrantyP1: '<strong>Get 1 Year extended guarantee</strong>',
  UpsellWarrantyP2: 'Our products are covered by <strong>30 days money back guarantee</strong>, but you can now extend it to <strong>1 year guarantee</strong>.',
  UpsellWarrantyP3: 'If the product stop working we will send you a new one for free!',
  UpsellWarrantyP4: '<strong>Get peace of mind by extending your guarantee</strong>',
  UpsellWarrantyP5: 'The price of 1 year guarantee is only <strong style="white-space: nowrap">{salePrice} {currency}</strong>',
  UpsellWarrantyP6: '<strong>Can you accept this special offer?</strong>',
  ThankYou: 'Thank you',
  ThankYouP1: '<strong>We have received your order, and here are your purchased products</strong>',
  PurchasedItems: '<strong>Purchased items</strong>',
  Total: '<strong>Total</strong>',
  MissingInfoText: 'If your delivery info is missing some information, you can correct it now',
  SaveConfirm: 'Save & confirm',
  OrderCongratulation: 'Congratulations! we have saved you information, we will call you very soon to confirm you order',
  AboutOrderShipping: 'Before shipping your order, we will call you today or tomorrow to confirm your delivery, please make sure your mobile phone number is correct.',
  CardAboutOrderShipping: 'Before shipping your order, we will contact you today or tomorrow to confirm your delivery, please make sure your address, email and mobile number are correct.',
  DeliveryTime: 'Delivery time: 2 to 5 days, Payment by Cash On Delivery',
  CardDeliveryTime: 'Delivery time: from 7 to 10 working days',
  ProductImage: 'Product image',
  ProductName: 'Product name',
  OrderNow: 'Order Now',
  PayByCashOnDelivery: 'Pay by Cash On Delivery',
  CardPayByCashOnDelivery: 'Secure payment by card',
  NoOfferInDomain: 'Sorry! No offers in this domain',
  CheckoutValidationError: 'Please complete your info.',
  WhatsUpHiMessage: 'Hi, please tell me more about : {page_name} : {page_url}'
}
