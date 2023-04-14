import React from 'react'
import './Hero.css'

const Search = () => {
  return (
    <>
      <input type="text" placeholder='Search' />
      <button>Search</button>
    </>
  )
}

// Swiggy API 

const FoodApi = [
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "611822",
        "name": "Thali Company",
        "uuid": "4e9547ed-eb6f-4669-a8d6-0a94449ae8f7",
        "city": "18",
        "area": "Vijay Nagar",
        "totalRatingsString": "",
        "cloudinaryImageId": "au9dkfzgdpxolec9s0rg",
        "cuisines": [
          "North Indian",
          "Indian"
        ],
        "tags": [

        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "the-thali-company-vijay-nagar-vijay-nagar",
          "city": "Indore"
        },
        "cityState": "18",
        "address": "",
        "locality": "Adarsh Mechanic Nagar",
        "parentId": 354462,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "aggregatedDiscountInfo": {
          "header": "61% off",
          "shortDescriptionList": [
            {
              "meta": "61% off on all orders",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "61% off on all orders",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "61% OFF",
          "shortDescriptionList": [
            {
              "meta": "",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "61% off on all orders",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [

        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 5500,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6464015~p=1~eid=00000187-80f7-8994-0fdb-78e800b10137~49301",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "5.5 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=611822",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "lastMileTravel": 0,
          "lastMileDistance": 5.5,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.7",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "642657",
        "name": "Wow! Momo",
        "uuid": "b422a664-41d2-456e-a872-b2604d8c117d",
        "city": "18",
        "area": "One Center 93",
        "totalRatingsString": "",
        "cloudinaryImageId": "90ac3da2963978f866177263fba805a7",
        "cuisines": [
          "Tibetan",
          "Healthy Food",
          "Asian",
          "Chinese",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages"
        ],
        "tags": [

        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "wow-momo-mullick-road-new-palasia",
          "city": "Indore"
        },
        "cityState": "18",
        "address": "",
        "locality": "Chappan Road Shop",
        "parentId": 1776,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "aggregatedDiscountInfo": {
          "header": "Flat ₹125 off",
          "shortDescriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹125 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [

        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3700,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=642657",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "lastMileTravel": 0,
          "lastMileDistance": 3,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "67501",
        "name": "Shree leela Restaurant",
        "uuid": "191413ed-2599-4e99-88a0-cb28080c515c",
        "city": "18",
        "area": "Sarwate Bus Stand",
        "totalRatingsString": "",
        "cloudinaryImageId": "xw9mfmhpj6v7lgvoj6n9",
        "cuisines": [
          "North Indian",
          "Thalis",
          "Punjabi"
        ],
        "tags": [

        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "hotel-shree-leela-sarwate-bus-stand-south-tukoganj",
          "city": "Indore"
        },
        "cityState": "18",
        "address": "",
        "locality": "Chhoti Gwaltoli",
        "parentId": 22061,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "aggregatedDiscountInfo": {
          "header": "Flat ₹125 off",
          "shortDescriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹125 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [

        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=67501",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 0,
          "lastMileDistance": 2,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "72574",
        "name": "99 Rotiwala-L.I.G",
        "uuid": "aa8e5401-43d0-4c97-9b04-59caa45e556c",
        "city": "18",
        "area": "Bhamori",
        "totalRatingsString": "",
        "cloudinaryImageId": "qawk8v7texq2hijbfczh",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Punjabi",
          "Chinese"
        ],
        "tags": [

        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "99-rotiwala-old-palasia-old-palasia",
          "city": "Indore"
        },
        "cityState": "18",
        "address": "",
        "locality": "Adarsh Mechenic Nagar",
        "parentId": 24437,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "aggregatedDiscountInfo": {
          "header": "10% off",
          "shortDescriptionList": [
            {
              "meta": "10% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "10% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [

        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 5500,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6464013~p=2~eid=00000187-80f7-8994-0fdb-78e900b10270~49301",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "5.5 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=72574",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "lastMileTravel": 0,
          "lastMileDistance": 5.5,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.8",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "84070",
        "name": "Gurukripa Restaurant  Sarwate",
        "uuid": "1e86e574-fa54-48f8-96f7-7ba27b0f635b",
        "city": "18",
        "area": "South Tukoganj",
        "totalRatingsString": "",
        "cloudinaryImageId": "g5txnz35wlrgbskk3r8y",
        "cuisines": [
          "North Indian",
          "Thalis",
          "Indian",
          "Fast Food",
          "Chinese",
          "Beverages",
          "Desserts",
          "Jain",
          "Punjabi"
        ],
        "tags": [

        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "slaString": "20 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "shree-gurukripa-sarwate-bus-stand-south-tukoganj",
          "city": "Indore"
        },
        "cityState": "18",
        "address": "",
        "locality": "Sarwate",
        "parentId": 92204,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "aggregatedDiscountInfo": {
          "header": "Flat ₹125 off",
          "shortDescriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹125 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [

        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "1.9 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=84070",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "lastMileTravel": 0,
          "lastMileDistance": 1.9,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "103357",
        "name": "Gurukripa South Tukoganj (DUTT)",
        "uuid": "97cf79bc-9982-482a-8b8a-dbe261c20ca7",
        "city": "18",
        "area": "South Tukoganj",
        "totalRatingsString": "",
        "cloudinaryImageId": "wbhvshhcwdzvrvuxfpsq",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Chinese",
          "Snacks",
          "Thalis",
          "Desserts",
          "Punjabi",
          "Beverages",
          "Indian",
          "Jain"
        ],
        "tags": [

        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "dutt-gurukripa-south-tukoganj-south-tukoganj",
          "city": "Indore"
        },
        "cityState": "18",
        "address": "",
        "locality": "Shanti Mandapum",
        "parentId": 92206,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "aggregatedDiscountInfo": {
          "header": "Flat ₹125 off",
          "shortDescriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹125 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [

        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "2.4 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=103357",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 0,
          "lastMileDistance": 2.4,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "63420",
        "name": "Biryani & Curry 143",
        "uuid": "253cfba3-f47e-4a6b-805e-2587aba0c368",
        "city": "18",
        "area": "Vijay Nagar",
        "totalRatingsString": "",
        "cloudinaryImageId": "aomgiatmqiphu7sk5wzd",
        "cuisines": [
          "Biryani",
          "North Indian"
        ],
        "tags": [

        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "slaString": "34 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "chef-luckys-biryani-143-old-palasia-old-palasia",
          "city": "Indore"
        },
        "cityState": "18",
        "address": "",
        "locality": "Scheme 54 Pu4",
        "parentId": 46404,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "aggregatedDiscountInfo": {
          "header": "Flat ₹125 off",
          "shortDescriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹125 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [

        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 6500,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 6500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "6500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6333259~p=3~eid=00000187-80f7-8994-0fdb-78ea00b1032f~49301",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "6.3 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=63420",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 34,
          "minDeliveryTime": 34,
          "maxDeliveryTime": 34,
          "lastMileTravel": 0,
          "lastMileDistance": 6.3,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  }



]

console.log(FoodApi)

const FoodCard = (props) => {
  const { resData } = props;
  console.log(resData)
  const { name, cuisines, costForTwo, deliveryTime, avgRating } = resData.data.data


  return (
    <div className="food-card">
      <img className='food-img' src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + resData.data.data.cloudinaryImageId} />
      {/* <h2>{resData.data.type.id}</h2> */}
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rs.{costForTwo / 100}</h4>
      <h4>Time {deliveryTime} min</h4>
      <h4>Rating{avgRating}</h4>

      {/* {console.log(foodData)} */}


    </div>
  )
}




const Hero = () => {

  return (
    <>
      {/* SearchBar  */}
      <Search />
      <div className="foodCardSection">

        {/* Food Cards  */}
        {
          FoodApi.map((restaurant) => {
            return (

              <FoodCard key={restaurant.data.data.id} resData={restaurant} />
            )
          })
        }


        {/* <FoodCard /> */}


      </div>

    </>
  )
}

export default Hero