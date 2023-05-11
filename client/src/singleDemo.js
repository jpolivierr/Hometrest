export const singleDemo = {
    "data": {
      "home": {
        "__typename": "Home",
        "property_id": "5242686095",
        "last_update_date": "2023-04-18T09:55:56Z",
        "listing_id": "2954439683",
        "status": "for_sale",
        "href": "https://www.realtor.com/realestateandhomes-detail/22698-Athlone-Dr_Great-Mills_MD_20634_M52426-86095",
        "list_date": "2023-04-11T14:41:05Z",
        "create_date": "2023-04-11T14:41:05Z",
        "mortgage": {
          "__typename": "Mortgage",
          "property_tax_rate": 0.00710448,
          "rates_url": "https://www.realtor.com/mortgage/rates/?from=mobile#zip=20634&property_price=335000&mlid=5242686095",
          "insurance_rate": 0.00335,
          "estimate": {
            "__typename": "MortgageEstimate",
            "loan_amount": 268000,
            "monthly_payment": 2133,
            "total_payment": 639035,
            "down_payment": 67000,
            "average_rate": {
              "__typename": "Rate",
              "rate": 0.06956,
              "loan_type": {
                "__typename": "LoanType",
                "term": 30
              }
            },
            "monthly_payment_details": [
              {
                "__typename": "MonthlyOwnershipExpense",
                "type": "principal_and_interest",
                "amount": 1775,
                "display_name": "Principal & Interest"
              },
              {
                "__typename": "MonthlyOwnershipExpense",
                "type": "home_insurance",
                "amount": 94,
                "display_name": "Home Insurance"
              },
              {
                "__typename": "MonthlyOwnershipExpense",
                "type": "hoa_fees",
                "amount": 66,
                "display_name": "HOA Fees"
              },
              {
                "__typename": "MonthlyOwnershipExpense",
                "type": "mortgage_insurance",
                "amount": 0,
                "display_name": "Mortgage Insurance"
              },
              {
                "__typename": "MonthlyOwnershipExpense",
                "type": "property_tax",
                "amount": 198,
                "display_name": "Property Tax"
              }
            ]
          },
          "average_rates": [
            {
              "__typename": "Rate",
              "loan_type": {
                "__typename": "LoanType",
                "loan_id": "thirty_year_fix"
              },
              "rate": 0.06956
            },
            {
              "__typename": "Rate",
              "loan_type": {
                "__typename": "LoanType",
                "loan_id": "twenty_year_fix"
              },
              "rate": 0.06633
            },
            {
              "__typename": "Rate",
              "loan_type": {
                "__typename": "LoanType",
                "loan_id": "fifteen_year_fix"
              },
              "rate": 0.06142
            },
            {
              "__typename": "Rate",
              "loan_type": {
                "__typename": "LoanType",
                "loan_id": "ten_year_fix"
              },
              "rate": 0.06152
            },
            {
              "__typename": "Rate",
              "loan_type": {
                "__typename": "LoanType",
                "loan_id": "thirty_year_fha"
              },
              "rate": 0.06668
            },
            {
              "__typename": "Rate",
              "loan_type": {
                "__typename": "LoanType",
                "loan_id": "thirty_year_va"
              },
              "rate": 0.06609
            },
            {
              "__typename": "Rate",
              "loan_type": {
                "__typename": "LoanType",
                "loan_id": "five_one_arm"
              },
              "rate": 0.06077
            },
            {
              "__typename": "Rate",
              "loan_type": {
                "__typename": "LoanType",
                "loan_id": "seven_one_arm"
              },
              "rate": 0.06375
            }
          ]
        },
        "hoa": {
          "__typename": "HomeHOA",
          "fee": 66,
          "historic_fee": true
        },
        "description": {
          "__typename": "HomeDescription",
          "baths_consolidated": "2",
          "baths": 2,
          "beds": 3,
          "garage": 2,
          "sqft": 1312,
          "lot_sqft": 8017,
          "stories": 1,
          "type": "single_family",
          "text": "Adorable and affordable! One level living in this 3 bedroom 2 full bath home in Hickory Hills. Nice open floor plan. Kitchen leads into great room which has hardwood floors and vaulted ceiling. Kitchen has newer cabinetry, Corian countertops and decorative backsplash. Newer HVAC in 2020. Convenient centralized location and close to numerous restaurants and shops. Super easy commute to PAX River NAS. Spacious fully fenced back yard has a nice sized shed with space for extra storage and garden tools. Community amenities include inground swimming pool, basketball/tennis courts, community center with fitness room and playground/tot lot.",
          "year_built": 2004
        },
        "assigned_schools": {
          "__typename": "SchoolList",
          "schools": [
            {
              "__typename": "School",
              "district": {
                "__typename": "SchoolDistrict",
                "name": "St. Mary's County Public Schools",
                "id": "06177143131"
              }
            },
            {
              "__typename": "School",
              "district": {
                "__typename": "SchoolDistrict",
                "name": "St. Mary's County Public Schools",
                "id": "06177143131"
              }
            },
            {
              "__typename": "School",
              "district": {
                "__typename": "SchoolDistrict",
                "name": "St. Mary's County Public Schools",
                "id": "06177143131"
              }
            }
          ]
        },
        "nearby_schools": {
          "__typename": "SchoolList",
          "schools": [
            {
              "__typename": "School",
              "assigned": true,
              "coordinate": {
                "__typename": "Coordinate",
                "lat": 38.292406,
                "lon": -76.489765
              },
              "distance_in_miles": 0.6,
              "district": {
                "__typename": "SchoolDistrict",
                "id": "06177143131",
                "name": "St. Mary's County Public Schools"
              },
              "education_levels": [
                "middle"
              ],
              "funding_type": "public",
              "grades": [
                "6",
                "7",
                "8"
              ],
              "id": "0734303531",
              "name": "Esperanza Middle School",
              "parent_rating": 3,
              "rating": 6,
              "student_count": 893
            },
            {
              "__typename": "School",
              "assigned": true,
              "coordinate": {
                "__typename": "Coordinate",
                "lat": 38.280011,
                "lon": -76.4931
              },
              "distance_in_miles": 0.9,
              "district": {
                "__typename": "SchoolDistrict",
                "id": "06177143131",
                "name": "St. Mary's County Public Schools"
              },
              "education_levels": [
                "elementary"
              ],
              "funding_type": "public",
              "grades": [
                "PK",
                "K",
                "1",
                "2",
                "3",
                "4",
                "5"
              ],
              "id": "0734303561",
              "name": "Greenview Knolls Elementary School",
              "parent_rating": 5,
              "rating": 6,
              "student_count": 425
            },
            {
              "__typename": "School",
              "assigned": true,
              "coordinate": {
                "__typename": "Coordinate",
                "lat": 38.24736,
                "lon": -76.487352
              },
              "distance_in_miles": 3.1,
              "district": {
                "__typename": "SchoolDistrict",
                "id": "06177143131",
                "name": "St. Mary's County Public Schools"
              },
              "education_levels": [
                "high"
              ],
              "funding_type": "public",
              "grades": [
                "9",
                "10",
                "11",
                "12"
              ],
              "id": "0734303551",
              "name": "Great Mills High School",
              "parent_rating": 4,
              "rating": 5,
              "student_count": 1682
            },
            {
              "__typename": "School",
              "coordinate": {
                "__typename": "Coordinate",
                "lat": 38.302938,
                "lon": -76.490544
              },
              "distance_in_miles": 0.9,
              "district": {
                "__typename": "SchoolDistrict",
                "id": "06177143131",
                "name": "St. Mary's County Public Schools"
              },
              "education_levels": [
                "elementary"
              ],
              "funding_type": "public",
              "grades": [
                "K",
                "1",
                "2",
                "3",
                "4",
                "5"
              ],
              "id": "0734303741",
              "name": "Town Creek Elementary School",
              "parent_rating": 5,
              "rating": 6,
              "student_count": 222
            },
            {
              "__typename": "School",
              "coordinate": {
                "__typename": "Coordinate",
                "lat": 38.293141,
                "lon": -76.482986
              },
              "distance_in_miles": 1,
              "district": {
                "__typename": "SchoolDistrict",
                "id": "06177143131",
                "name": "St. Mary's County Public Schools"
              },
              "education_levels": [
                "elementary"
              ],
              "funding_type": "public",
              "grades": [
                "PK",
                "K",
                "1",
                "2",
                "3",
                "4",
                "5"
              ],
              "id": "0734303541",
              "name": "Green Holly Elementary School",
              "parent_rating": 3,
              "rating": 6,
              "student_count": 551
            },
            {
              "__typename": "School",
              "coordinate": {
                "__typename": "Coordinate",
                "lat": 38.305981,
                "lon": -76.531586
              },
              "distance_in_miles": 2,
              "district": {
                "__typename": "SchoolDistrict",
                "id": "06177142841"
              },
              "education_levels": [
                "elementary"
              ],
              "funding_type": "private",
              "grades": [
                "1",
                "2",
                "3",
                "5"
              ],
              "id": "0734343901",
              "name": "Thee Christian School"
            },
            {
              "__typename": "School",
              "coordinate": {
                "__typename": "Coordinate",
                "lat": 38.310829,
                "lon": -76.543211
              },
              "distance_in_miles": 2.7,
              "district": {
                "__typename": "SchoolDistrict",
                "id": "06177142841"
              },
              "education_levels": [
                "elementary"
              ],
              "funding_type": "private",
              "grades": [
                "PK",
                "K",
                "1",
                "2"
              ],
              "id": "0734311011",
              "name": "Starmaker Learning Center",
              "parent_rating": 3,
              "student_count": 123
            },
            {
              "__typename": "School",
              "coordinate": {
                "__typename": "Coordinate",
                "lat": 38.325158,
                "lon": -76.460568
              },
              "distance_in_miles": 3.2,
              "district": {
                "__typename": "SchoolDistrict",
                "id": "06177142841"
              },
              "education_levels": [
                "elementary",
                "middle"
              ],
              "funding_type": "private",
              "grades": [
                "PK",
                "K",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8"
              ],
              "id": "0734308261",
              "name": "Our Lady Star of the Sea School",
              "parent_rating": 4,
              "student_count": 101
            },
            {
              "__typename": "School",
              "coordinate": {
                "__typename": "Coordinate",
                "lat": 38.242875,
                "lon": -76.492949
              },
              "distance_in_miles": 3.4,
              "district": {
                "__typename": "SchoolDistrict",
                "id": "06177143131",
                "name": "St. Mary's County Public Schools"
              },
              "education_levels": [
                "elementary",
                "middle"
              ],
              "funding_type": "public",
              "grades": [
                "K",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8"
              ],
              "id": "0734344451",
              "name": "Chesapeake Charter School",
              "parent_rating": 5,
              "rating": 8,
              "student_count": 440
            },
            {
              "__typename": "School",
              "coordinate": {
                "__typename": "Coordinate",
                "lat": 38.240509,
                "lon": -76.494576
              },
              "distance_in_miles": 3.5,
              "district": {
                "__typename": "SchoolDistrict",
                "id": "06177143131",
                "name": "St. Mary's County Public Schools"
              },
              "education_levels": [
                "elementary",
                "middle",
                "high"
              ],
              "funding_type": "public",
              "id": "0734360611",
              "name": "St. Mary's County Evening High",
              "student_count": 0
            },
            {
              "__typename": "School",
              "coordinate": {
                "__typename": "Coordinate",
                "lat": 38.270024,
                "lon": -76.610722
              },
              "distance_in_miles": 6.2,
              "district": {
                "__typename": "SchoolDistrict",
                "id": "06177143131",
                "name": "St. Mary's County Public Schools"
              },
              "education_levels": [
                "high"
              ],
              "funding_type": "public",
              "grades": [
                "9",
                "10",
                "11",
                "12"
              ],
              "id": "0734303761",
              "name": "Leonardtown High School",
              "parent_rating": 1,
              "rating": 8,
              "student_count": 1796
            }
          ]
        },
        "schools": {
          "__typename": "SchoolList",
          "schools": [
            {
              "__typename": "School",
              "assigned": true,
              "coordinate": {
                "__typename": "Coordinate",
                "lat": 38.292406,
                "lon": -76.489765
              },
              "distance_in_miles": 0.6,
              "district": {
                "__typename": "SchoolDistrict",
                "id": "06177143131",
                "name": "St. Mary's County Public Schools"
              },
              "education_levels": [
                "middle"
              ],
              "funding_type": "public",
              "grades": [
                "6",
                "7",
                "8"
              ],
              "id": "0734303531",
              "name": "Esperanza Middle School",
              "parent_rating": 3,
              "rating": 6,
              "student_count": 893
            },
            {
              "__typename": "School",
              "assigned": true,
              "coordinate": {
                "__typename": "Coordinate",
                "lat": 38.280011,
                "lon": -76.4931
              },
              "distance_in_miles": 0.9,
              "district": {
                "__typename": "SchoolDistrict",
                "id": "06177143131",
                "name": "St. Mary's County Public Schools"
              },
              "education_levels": [
                "elementary"
              ],
              "funding_type": "public",
              "grades": [
                "PK",
                "K",
                "1",
                "2",
                "3",
                "4",
                "5"
              ],
              "id": "0734303561",
              "name": "Greenview Knolls Elementary School",
              "parent_rating": 5,
              "rating": 6,
              "student_count": 425
            },
            {
              "__typename": "School",
              "assigned": true,
              "coordinate": {
                "__typename": "Coordinate",
                "lat": 38.24736,
                "lon": -76.487352
              },
              "distance_in_miles": 3.1,
              "district": {
                "__typename": "SchoolDistrict",
                "id": "06177143131",
                "name": "St. Mary's County Public Schools"
              },
              "education_levels": [
                "high"
              ],
              "funding_type": "public",
              "grades": [
                "9",
                "10",
                "11",
                "12"
              ],
              "id": "0734303551",
              "name": "Great Mills High School",
              "parent_rating": 4,
              "rating": 5,
              "student_count": 1682
            },
            {
              "__typename": "School",
              "coordinate": {
                "__typename": "Coordinate",
                "lat": 38.305981,
                "lon": -76.531586
              },
              "distance_in_miles": 2,
              "district": {
                "__typename": "SchoolDistrict",
                "id": "06177142841"
              },
              "education_levels": [
                "elementary"
              ],
              "funding_type": "private",
              "grades": [
                "1",
                "2",
                "3",
                "5"
              ],
              "id": "0734343901",
              "name": "Thee Christian School"
            }
          ]
        },
        "products": {
          "__typename": "ProductSummary",
          "products": [
            "core.agent",
            "core.broker",
            "co_broke"
          ]
        },
        "list_price": 335000,
        "price_per_sqft": 255,
        "lead_attributes": {
          "__typename": "LeadAttributes",
          "opcity_lead_attributes": {
            "__typename": "OpCityLeadAttributes",
            "flip_the_market_enabled": false,
            "cashback_enabled": false
          },
          "ready_connect_mortgage": {
            "__typename": "ReadyConnectMortgage",
            "show_contact_a_lender": true,
            "show_veterans_united": true
          },
          "show_contact_an_agent": true,
          "lead_type": "co_broke",
          "show_lead_form": true,
          "show_text_leads": true
        },
        "flags": {
          "__typename": "HomeFlags",
          "is_contingent": true,
          "is_garage_present": true,
          "is_new_listing": false
        },
        "provider_url": {
          "__typename": "HomeProviderUrl",
          "href": "https://www.century21.com/listingdetail/C21BZ7K2Q/"
        },
        "source": {
          "__typename": "MlsSource",
          "id": "PHPA",
          "disclaimer": {
            "__typename": "MlsDisclaimer",
            "text": "©2023 Bright MLS, Inc. All Rights Reserved."
          },
          "listing_id": "MDSM2012534",
          "name": "BrightMLS",
          "type": "mls",
          "raw": {
            "__typename": "MlsRawData",
            "style": "Ranch/Rambler",
            "tax_amount": 2380
          }
        },
        "details": [
          {
            "__typename": "HomeDetails",
            "category": "Bedrooms",
            "text": [
              "Bedrooms: 3"
            ]
          },
          {
            "__typename": "HomeDetails",
            "category": "Bathrooms",
            "text": [
              "Total Bathrooms: 2",
              "Full Bathrooms: 2"
            ]
          },
          {
            "__typename": "HomeDetails",
            "category": "Interior Features",
            "text": [
              "Ceiling Fan(s)",
              "Combination Kitchen/Dining",
              "Entry Level Bedroom",
              "Family Room Off Kitchen",
              "Floor Plan - Open",
              "Recessed Lighting",
              "Wood Floors"
            ]
          },
          {
            "__typename": "HomeDetails",
            "category": "Appliances",
            "text": [
              "Built-In Microwave",
              "Dishwasher",
              "Disposal",
              "Refrigerator",
              "Stove"
            ]
          },
          {
            "__typename": "HomeDetails",
            "category": "Heating and Cooling",
            "text": [
              "Cooling Features: Central A/C",
              "Heating Features: Forced Air Heating",
              "Heating: Yes"
            ]
          },
          {
            "__typename": "HomeDetails",
            "category": "Land Info",
            "text": [
              "Lot Size Acres: 0.184045",
              "Lot Size Square Feet: 8017"
            ]
          },
          {
            "__typename": "HomeDetails",
            "category": "Garage and Parking",
            "text": [
              "Garage Spaces: 2",
              "Garage Features: Garage - Front Entry, Garage Door Opener, Inside Access",
              "Parking Features: Attached Garage Spaces: 2, Attached Garage",
              "Parking Total: 2"
            ]
          },
          {
            "__typename": "HomeDetails",
            "category": "Homeowners Association",
            "text": [
              "Association: Yes",
              "Association Fee: 66",
              "Association Fee Frequency: Monthly",
              "Calculated Total Monthly Association Fees: 66"
            ]
          },
          {
            "__typename": "HomeDetails",
            "category": "School Information",
            "text": [
              "School District: ST. MARY'S COUNTY PUBLIC SCHOOLS"
            ]
          },
          {
            "__typename": "HomeDetails",
            "category": "Other Property Info",
            "text": [
              "Annual Tax Amount: 2380.0",
              "Source Listing Status: Active Under Contract",
              "County: SAINT MARYS",
              "Disclaimer: Standard",
              "Ownership: Fee Simple",
              "Area: SAINT MARYS",
              "Source Neighborhood: HICKORY HILLS NORTH",
              "Postal Code Plus 4: 2464",
              "Subdivision: HICKORY HILLS NORTH",
              "Source System Name: C2C"
            ]
          },
          {
            "__typename": "HomeDetails",
            "category": "Building and Construction",
            "text": [
              "Total Square Feet Living: 1312",
              "Year Built: 2004",
              "Above Grade Finished Area: 1312",
              "Construction Materials: Vinyl Siding",
              "Property Age: 19",
              "Levels or Stories: 1",
              "Structure Type: Detached",
              "House Style: Ranch/Rambler",
              "Total Area Sqft: 1312"
            ]
          }
        ],
        "tax_history": [
          {
            "__typename": "TaxHistory",
            "tax": 2431,
            "year": 2021,
            "assessment": {
              "__typename": "Assessment",
              "total": 220933
            }
          },
          {
            "__typename": "TaxHistory",
            "tax": 2384,
            "year": 2020,
            "assessment": {
              "__typename": "Assessment",
              "building": 122900,
              "land": 93800,
              "total": 216700
            }
          },
          {
            "__typename": "TaxHistory",
            "tax": 2382,
            "year": 2019,
            "assessment": {
              "__typename": "Assessment",
              "building": 122900,
              "land": 93800,
              "total": 216700
            }
          },
          {
            "__typename": "TaxHistory",
            "tax": 2381,
            "year": 2018,
            "assessment": {
              "__typename": "Assessment",
              "building": 122900,
              "land": 93800,
              "total": 216700
            }
          },
          {
            "__typename": "TaxHistory",
            "tax": 2371,
            "year": 2017,
            "assessment": {
              "__typename": "Assessment",
              "building": 125000,
              "land": 93800,
              "total": 218800
            }
          },
          {
            "__typename": "TaxHistory",
            "tax": 2381,
            "year": 2016,
            "assessment": {
              "__typename": "Assessment",
              "building": 125000,
              "land": 93800,
              "total": 218800
            }
          },
          {
            "__typename": "TaxHistory",
            "tax": 2351,
            "year": 2015,
            "assessment": {
              "__typename": "Assessment",
              "building": 125000,
              "land": 93800,
              "total": 218800
            }
          },
          {
            "__typename": "TaxHistory",
            "tax": 2338,
            "year": 2014,
            "assessment": {
              "__typename": "Assessment",
              "building": 128500,
              "land": 93800,
              "total": 222300
            }
          },
          {
            "__typename": "TaxHistory",
            "tax": 2398,
            "year": 2013,
            "assessment": {
              "__typename": "Assessment",
              "total": 222300
            }
          },
          {
            "__typename": "TaxHistory",
            "tax": 2398,
            "year": 2012,
            "assessment": {
              "__typename": "Assessment",
              "total": 222300
            }
          },
          {
            "__typename": "TaxHistory",
            "tax": 2617,
            "year": 2011,
            "assessment": {
              "__typename": "Assessment",
              "total": 243070
            }
          },
          {
            "__typename": "TaxHistory",
            "tax": 2564,
            "year": 2010,
            "assessment": {
              "__typename": "Assessment",
              "total": 238116
            }
          },
          {
            "__typename": "TaxHistory",
            "tax": 2512,
            "year": 2009,
            "assessment": {
              "__typename": "Assessment",
              "total": 233163
            }
          },
          {
            "__typename": "TaxHistory",
            "tax": 2211,
            "year": 2008,
            "assessment": {
              "__typename": "Assessment",
              "total": 228210
            }
          }
        ],
        "location": {
          "__typename": "HomeLocation",
          "address": {
            "__typename": "HomeAddress",
            "line": "22698 Athlone Dr",
            "street_number": "22698",
            "street_name": "Athlone",
            "street_suffix": "Dr",
            "city": "Great Mills",
            "state_code": "MD",
            "postal_code": "20634",
            "state": "Maryland",
            "coordinate": {
              "__typename": "HomeCoordinate",
              "lat": 38.291662,
              "lon": -76.500458
            }
          },
          "county": {
            "__typename": "HomeCounty",
            "fips_code": "24037"
          },
          "street_view_url": "",
          "neighborhoods": [
            {
              "__typename": "Neighborhood",
              "name": "FDR Boulevard Corridor",
              "city": "California",
              "level": "neighborhood",
              "geo_statistics": {
                "__typename": "GeoStatistics",
                "housing_market": {
                  "__typename": "HousingMarket",
                  "median_price_per_sqft": 186,
                  "median_sold_price": 284950,
                  "median_listing_price": 307450,
                  "median_days_on_market": 43
                }
              }
            }
          ]
        },
        "branding": [
          {
            "__typename": "Branding",
            "type": "Agent",
            "name": "Cindy Ballard"
          },
          {
            "__typename": "Branding",
            "type": "Office",
            "photo": "https://ap.rdcpix.com/652fabe07d76ed05177b1f470846fa04o-b3487744334s.jpg",
            "name": "CENTURY 21 New Millennium"
          }
        ],
        "consumer_advertisers": [
          {
            "__typename": "ConsumerAdvertiser",
            "advertiser_id": "35763",
            "office_id": "35763",
            "agent_id": "671697",
            "name": "Cindy Ballard",
            "type": "Agent",
            "href": "/realestateagents/Cindy-Ballard_Great-Mills_MD_671697_345754535",
            "photo": {
              "__typename": "Photo"
            },
            "show_realtor_logo": true
          },
          {
            "__typename": "ConsumerAdvertiser",
            "advertiser_id": "35763",
            "office_id": "35763",
            "agent_id": "671697",
            "name": "CENTURY 21 New Millennium",
            "phone": "(804) 352-6457",
            "type": "Office",
            "href": "https://www.century21.com/listingdetail/C21BZ7K2Q/",
            "photo": {
              "__typename": "Photo",
              "href": "https://ap.rdcpix.com/652fabe07d76ed05177b1f470846fa04o-b3487744334s.jpg"
            },
            "show_realtor_logo": false
          }
        ],
        "advertisers": [
          {
            "__typename": "HomeAdvertiser",
            "fulfillment_id": "671697",
            "name": "Cindy Ballard",
            "type": "seller",
            "email": "cindy.ballard@c21nm.com",
            "href": "https://www.c21nm.com/agents/cindy-ballard/",
            "state_license": "",
            "phones": [
              {
                "__typename": "AdvertiserPhone",
                "number": "3018622169",
                "type": "Office",
                "ext": ""
              },
              {
                "__typename": "AdvertiserPhone",
                "number": "2409250259",
                "type": "Mobile",
                "ext": ""
              }
            ],
            "office": {
              "__typename": "HomeAdvertiserOffice",
              "fulfillment_id": "35763",
              "name": "CENTURY 21 New Millennium",
              "href": "https://www.c21nm.com/offices/lexington-park",
              "photo": {
                "__typename": "Href",
                "href": "https://ap.rdcpix.com/652fabe07d76ed05177b1f470846fa04o-b3487744334l.jpg"
              },
              "email": "tommy.higgins@c21nm.com",
              "phones": [
                {
                  "__typename": "AdvertiserPhone",
                  "number": "3018622169",
                  "type": "Office",
                  "ext": ""
                },
                {
                  "__typename": "AdvertiserPhone",
                  "number": "(301) 862-2179",
                  "type": "Fax",
                  "ext": ""
                }
              ]
            },
            "broker": {
              "__typename": "HomeAdvertiserBroker",
              "fulfillment_id": "1462536",
              "name": "Century 21 New Millennium"
            },
            "photo": {
              "__typename": "Href",
              "href": "https://ap.rdcpix.com/928407294/5af8352472f53eb6f4fd5c77c8a995eca-e0l.jpg"
            }
          }
        ],
        "photo_count": 30,
        "photos": [
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b3453218838s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "garage",
                "probability": 0.9998810291290283
              },
              {
                "__typename": "Tag",
                "label": "house_view",
                "probability": 0.9980960488319397
              },
              {
                "__typename": "Tag",
                "label": "road_view",
                "probability": 0.46067121624946594
              },
              {
                "__typename": "Tag",
                "label": "yard",
                "probability": 0.9996180534362793
              },
              {
                "__typename": "Tag",
                "label": "house_view",
                "probability": 0.9253574013710022
              },
              {
                "__typename": "Tag",
                "label": "house_view",
                "probability": 0.9999270439147949
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b4025264535s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "garage",
                "probability": 0.9976881742477417
              },
              {
                "__typename": "Tag",
                "label": "house_view",
                "probability": 0.9995880722999573
              },
              {
                "__typename": "Tag",
                "label": "yard",
                "probability": 0.9999078512191772
              },
              {
                "__typename": "Tag",
                "label": "house_view",
                "probability": 0.6830275654792786
              },
              {
                "__typename": "Tag",
                "label": "house_view",
                "probability": 0.579477071762085
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b3603593063s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "living_room",
                "probability": 0.6023246049880981
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b4262220039s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "living_room",
                "probability": 0.9999898672103882
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b2015120631s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "living_room",
                "probability": 0.9999996423721313
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b862069160s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "kitchen",
                "probability": 0.9998626708984375
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b359734813s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "kitchen",
                "probability": 0.9969160556793213
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b4157768885s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "kitchen",
                "probability": 0.9992932081222534
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b2435264904s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "kitchen",
                "probability": 0.9998794794082642
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b759182177s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "kitchen",
                "probability": 0.9960229396820068
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b2843452763s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "dining_room",
                "probability": 0.9999996423721313
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b3990011634s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "bedroom",
                "probability": 0.9990697503089905
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b4258771622s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "bedroom",
                "probability": 0.9999775886535645
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b2278881954s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "bedroom",
                "probability": 0.9997610449790955
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b3117368433s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "bathroom",
                "probability": 0.9663655757904053
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b3260566600s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "bathroom",
                "probability": 0.9994940757751465
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b476166931s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "unknown",
                "probability": 0.9993147850036621
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b699111825s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "unknown",
                "probability": 0.6434553265571594
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b628704206s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "unknown",
                "probability": 0.8504377007484436
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b2500680903s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "unknown",
                "probability": 0.9939646124839783
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b2337273627s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "unknown",
                "probability": 0.9117281436920166
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b550829980s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "bathroom",
                "probability": 1
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b1453591691s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "bathroom",
                "probability": 0.9999849796295166
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b800469965s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "laundry_room",
                "probability": 0.9998224377632141
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b4095864585s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "house_view",
                "probability": 0.9920768737792969
              },
              {
                "__typename": "Tag",
                "label": "porch",
                "probability": 0.9628076553344727
              },
              {
                "__typename": "Tag",
                "label": "porch",
                "probability": 0.9879181981086731
              },
              {
                "__typename": "Tag",
                "label": "yard",
                "probability": 0.9974433183670044
              },
              {
                "__typename": "Tag",
                "label": "house_view",
                "probability": 0.9958881735801697
              },
              {
                "__typename": "Tag",
                "label": "house_view",
                "probability": 0.8913018703460693
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b315195408s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "house_view",
                "probability": 0.9974588751792908
              },
              {
                "__typename": "Tag",
                "label": "yard",
                "probability": 0.9976896047592163
              },
              {
                "__typename": "Tag",
                "label": "house_view",
                "probability": 0.5401063561439514
              },
              {
                "__typename": "Tag",
                "label": "house_view",
                "probability": 0.7596295475959778
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b566466641s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "yard",
                "probability": 0.9820106625556946
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b1113374388s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "unknown",
                "probability": 0.30507707595825195
              },
              {
                "__typename": "Tag",
                "label": "yard",
                "probability": 0.9346569776535034
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b3357775337s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "unknown",
                "probability": 0.2815920412540436
              },
              {
                "__typename": "Tag",
                "label": "yard",
                "probability": 0.9908761382102966
              }
            ]
          },
          {
            "__typename": "HomePhoto",
            "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b2654162935s.jpg",
            "tags": [
              {
                "__typename": "Tag",
                "label": "unknown",
                "probability": 0.9615247249603271
              }
            ]
          }
        ],
        "property_history": [
          {
            "__typename": "HomePropertyHistory",
            "date": "2023-04-11",
            "event_name": "Listed",
            "price": 335000,
            "source_name": "BrightMLS",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://ap.rdcpix.com/6922091bbfd8b513dee04c014af11d56l-b3453218838s.jpg",
                  "tags": [
                    {
                      "__typename": "Tag",
                      "label": "garage",
                      "probability": 0.9998810291290283
                    },
                    {
                      "__typename": "Tag",
                      "label": "house_view",
                      "probability": 0.9980960488319397
                    },
                    {
                      "__typename": "Tag",
                      "label": "road_view",
                      "probability": 0.46067121624946594
                    },
                    {
                      "__typename": "Tag",
                      "label": "yard",
                      "probability": 0.9996180534362793
                    },
                    {
                      "__typename": "Tag",
                      "label": "house_view",
                      "probability": 0.9253574013710022
                    },
                    {
                      "__typename": "Tag",
                      "label": "house_view",
                      "probability": 0.9999270439147949
                    }
                  ]
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1312
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2022-05-19",
            "event_name": "Listing removed",
            "price": 0,
            "source_name": "ShowMojo",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://ap.rdcpix.com/86f3992bf9d91c3c9ddfe8d133410c16l-m4159658111s.jpg",
                  "type": "realtordotcom_mls_listing_image"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1750
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2022-04-22",
            "event_name": "Listed for rent",
            "price": 2000,
            "source_name": "ShowMojo",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://ap.rdcpix.com/86f3992bf9d91c3c9ddfe8d133410c16l-m4159658111s.jpg",
                  "type": "realtordotcom_mls_listing_image"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1750
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2019-01-03",
            "event_name": "Listing removed",
            "price": 1725,
            "source_name": "ShowMojo",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://ap.rdcpix.com/86f3992bf9d91c3c9ddfe8d133410c16l-m4159658111s.jpg",
                  "type": "realtordotcom_mls_listing_image"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1750
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2018-12-29",
            "event_name": "Listed for rent",
            "price": 1725,
            "source_name": "ShowMojo",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://ap.rdcpix.com/86f3992bf9d91c3c9ddfe8d133410c16l-m4159658111s.jpg",
                  "type": "realtordotcom_mls_listing_image"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1750
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2017-12-28",
            "event_name": "Listing removed",
            "price": 1725,
            "source_name": "ShowMojo",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://ap.rdcpix.com/86f3992bf9d91c3c9ddfe8d133410c16l-m4159658111s.jpg",
                  "type": "realtordotcom_mls_listing_image"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1750
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2017-12-15",
            "event_name": "Listing removed",
            "price": 1725,
            "source_name": "RentlinxUnits",
            "listing": {
              "__typename": "HomeListing",
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1550
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2017-12-15",
            "event_name": "Listing removed",
            "price": 1725,
            "source_name": "BrightMLS",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://ap.rdcpix.com/999609049/302bd4ebc6d9781be014385264d79a82l-m0s.jpg"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1800
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2017-12-11",
            "event_name": "Listed for rent",
            "price": 1725,
            "source_name": "BrightMLS",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://ap.rdcpix.com/999609049/302bd4ebc6d9781be014385264d79a82l-m0s.jpg"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1800
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2017-10-24",
            "event_name": "Listing removed",
            "price": 1725,
            "source_name": "MRIS",
            "listing": {
              "__typename": "HomeListing",
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1800
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2017-10-03",
            "event_name": "Listed for rent",
            "price": 1725,
            "source_name": "MRIS",
            "listing": {
              "__typename": "HomeListing",
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1800
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2017-09-15",
            "event_name": "Listed for rent",
            "price": 1725,
            "source_name": "RentlinxUnits",
            "listing": {
              "__typename": "HomeListing",
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1550
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2017-09-14",
            "event_name": "Listed for rent",
            "price": 1725,
            "source_name": "ShowMojo",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://ap.rdcpix.com/86f3992bf9d91c3c9ddfe8d133410c16l-m4159658111s.jpg",
                  "type": "realtordotcom_mls_listing_image"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1750
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2015-04-27",
            "event_name": "Listing removed",
            "price": 1650,
            "source_name": "ShowMojo",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://ap.rdcpix.com/86f3992bf9d91c3c9ddfe8d133410c16l-m4159658111s.jpg",
                  "type": "realtordotcom_mls_listing_image"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1750
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2015-04-25",
            "event_name": "Listing removed",
            "price": 1650,
            "source_name": "RentalRoost",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://r.rdcpix.com/v01/lc1f32655-r0s.jpg"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1550
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2015-04-25",
            "event_name": "Listing removed",
            "price": 1650,
            "source_name": "Appfolio",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://r.rdcpix.com/v01/l89cb2655-r0s.jpg"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1550
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2015-04-25",
            "event_name": "Listing removed",
            "price": 1650,
            "source_name": "MRIS",
            "listing": {
              "__typename": "HomeListing",
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1800
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2015-04-02",
            "event_name": "Listed for rent",
            "price": 1650,
            "source_name": "MRIS",
            "listing": {
              "__typename": "HomeListing",
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1800
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2015-03-26",
            "event_name": "Listed for rent",
            "price": 1650,
            "source_name": "ShowMojo",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://ap.rdcpix.com/86f3992bf9d91c3c9ddfe8d133410c16l-m4159658111s.jpg",
                  "type": "realtordotcom_mls_listing_image"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1750
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2015-03-25",
            "event_name": "Listed for rent",
            "price": 1650,
            "source_name": "RentalRoost",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://r.rdcpix.com/v01/lc1f32655-r0s.jpg"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1550
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2015-03-25",
            "event_name": "Listed for rent",
            "price": 1650,
            "source_name": "Appfolio",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://r.rdcpix.com/v01/l89cb2655-r0s.jpg"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1550
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2014-07-31",
            "event_name": "Listing removed",
            "price": 1650,
            "source_name": "ShowMojo",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://ap.rdcpix.com/86f3992bf9d91c3c9ddfe8d133410c16l-m4159658111s.jpg",
                  "type": "realtordotcom_mls_listing_image"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1750
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2014-07-30",
            "event_name": "Listed for rent",
            "price": 1650,
            "source_name": "ShowMojo",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://ap.rdcpix.com/86f3992bf9d91c3c9ddfe8d133410c16l-m4159658111s.jpg",
                  "type": "realtordotcom_mls_listing_image"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1750
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2014-04-08",
            "event_name": "Listing removed",
            "price": 1675,
            "source_name": "MRIS",
            "listing": {
              "__typename": "HomeListing",
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1800
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2014-04-05",
            "event_name": "Listing removed",
            "price": 1650,
            "source_name": "ShowMojo",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://ap.rdcpix.com/86f3992bf9d91c3c9ddfe8d133410c16l-m4159658111s.jpg",
                  "type": "realtordotcom_mls_listing_image"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1750
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2014-04-05",
            "event_name": "Listing removed",
            "price": 1650,
            "source_name": "Appfolio",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://r.rdcpix.com/v01/l89cb2655-r0s.jpg"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1550
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2014-02-26",
            "event_name": "Listed for rent",
            "price": 1675,
            "source_name": "MRIS",
            "listing": {
              "__typename": "HomeListing",
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1800
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2014-02-13",
            "event_name": "Listed for rent",
            "price": 1650,
            "source_name": "Appfolio",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://r.rdcpix.com/v01/l89cb2655-r0s.jpg"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1550
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2014-02-12",
            "event_name": "Listing removed",
            "price": 1675,
            "source_name": "MRIS",
            "listing": {
              "__typename": "HomeListing",
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1800
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2014-02-06",
            "event_name": "Listed for rent",
            "price": 1650,
            "source_name": "ShowMojo",
            "listing": {
              "__typename": "HomeListing",
              "photos": [
                {
                  "__typename": "HomePhoto",
                  "href": "https://ap.rdcpix.com/86f3992bf9d91c3c9ddfe8d133410c16l-m4159658111s.jpg",
                  "type": "realtordotcom_mls_listing_image"
                }
              ],
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1750
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2014-02-03",
            "event_name": "Price Changed for rent",
            "price": 1675,
            "source_name": "MRIS",
            "listing": {
              "__typename": "HomeListing",
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1800
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2013-10-28",
            "event_name": "Listed for rent",
            "price": 1750,
            "source_name": "MRIS",
            "listing": {
              "__typename": "HomeListing",
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1800
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2012-03-20",
            "event_name": "Listing removed",
            "price": 1700,
            "source_name": "MRIS",
            "listing": {
              "__typename": "HomeListing",
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1750
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2012-03-08",
            "event_name": "Listed for rent",
            "price": 1700,
            "source_name": "MRIS",
            "listing": {
              "__typename": "HomeListing",
              "description": {
                "__typename": "HomeDescription",
                "sqft": 1750
              }
            }
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2008-04-16",
            "event_name": "Sold",
            "price": 269900,
            "source_name": "Public Record"
          },
          {
            "__typename": "HomePropertyHistory",
            "date": "2005-02-02",
            "event_name": "Sold",
            "price": 232253,
            "source_name": "Public Record"
          }
        ],
        "local": {
          "__typename": "Local",
          "noise": {
            "__typename": "Noise",
            "score": 76,
            "noise_categories": [
              {
                "__typename": "NoiseCategory",
                "type": "airport",
                "text": "Low"
              },
              {
                "__typename": "NoiseCategory",
                "type": "traffic",
                "text": "Medium"
              },
              {
                "__typename": "NoiseCategory",
                "type": "local",
                "text": "Medium"
              },
              {
                "__typename": "NoiseCategory",
                "type": "score",
                "text": "Medium"
              }
            ]
          },
          "flood": {
            "__typename": "Flood",
            "flood_factor_score": 1,
            "fema_zone": [
              "X"
            ]
          }
        },
        "last_sold_price": 269900,
        "last_sold_date": "2008-04-16",
        "estimates": {
          "__typename": "HomeEstimates",
          "current_values": [
            {
              "__typename": "LatestEstimate",
              "source": {
                "__typename": "EstimateSource",
                "type": "quantarium",
                "name": "Quantarium"
              },
              "estimate": 335644,
              "estimate_high": 349069,
              "estimate_low": 322218,
              "date": "2023-05-03"
            },
            {
              "__typename": "LatestEstimate",
              "source": {
                "__typename": "EstimateSource",
                "type": "collateral",
                "name": "Collateral Analytics"
              },
              "estimate": 353000,
              "estimate_high": 381200,
              "estimate_low": 324800,
              "date": "2023-04-14"
            },
            {
              "__typename": "LatestEstimate",
              "source": {
                "__typename": "EstimateSource",
                "type": "corelogic",
                "name": "CoreLogic®"
              },
              "estimate": 331500,
              "estimate_high": 357100,
              "estimate_low": 305800,
              "date": "2023-05-03"
            }
          ],
          "historical_values": [
            {
              "__typename": "HistoricalEstimate",
              "source": {
                "__typename": "EstimateSource",
                "type": "collateral",
                "name": "Collateral Analytics"
              },
              "estimates": [
                {
                  "__typename": "EstimateRecord",
                  "estimate": 353000,
                  "date": "2023-04-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 348000,
                  "date": "2023-03-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 361000,
                  "date": "2023-02-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 362000,
                  "date": "2023-01-15"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 375000,
                  "date": "2022-12-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 372000,
                  "date": "2022-11-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 366000,
                  "date": "2022-10-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 354000,
                  "date": "2022-09-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 360000,
                  "date": "2022-08-15"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 350000,
                  "date": "2022-07-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 356000,
                  "date": "2022-06-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 359000,
                  "date": "2022-05-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 345000,
                  "date": "2022-04-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 340000,
                  "date": "2022-03-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 334000,
                  "date": "2022-02-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 358000,
                  "date": "2022-01-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 359000,
                  "date": "2021-12-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 350000,
                  "date": "2021-11-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 358000,
                  "date": "2021-10-18"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 358000,
                  "date": "2021-09-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 329000,
                  "date": "2021-08-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 321000,
                  "date": "2021-07-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 320000,
                  "date": "2021-06-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 299000,
                  "date": "2021-05-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 282000,
                  "date": "2021-04-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 279000,
                  "date": "2021-03-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 269000,
                  "date": "2021-02-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 268000,
                  "date": "2021-01-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 276000,
                  "date": "2020-12-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 282000,
                  "date": "2020-11-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 268000,
                  "date": "2020-10-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 265000,
                  "date": "2020-09-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 255000,
                  "date": "2020-08-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 249000,
                  "date": "2020-07-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 249573,
                  "date": "2020-06-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 250146,
                  "date": "2020-05-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 247272,
                  "date": "2020-04-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 245000,
                  "date": "2020-03-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 243619,
                  "date": "2020-02-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 243173,
                  "date": "2020-01-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 243530,
                  "date": "2019-12-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 244465,
                  "date": "2019-11-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 245713,
                  "date": "2019-10-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 246961,
                  "date": "2019-09-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 247963,
                  "date": "2019-08-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 248542,
                  "date": "2019-07-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 248565,
                  "date": "2019-06-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 247985,
                  "date": "2019-05-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 246782,
                  "date": "2019-04-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 245000,
                  "date": "2019-03-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 242750,
                  "date": "2019-02-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 240143,
                  "date": "2019-01-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 237247,
                  "date": "2018-12-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 234217,
                  "date": "2018-11-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 231143,
                  "date": "2018-10-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 228157,
                  "date": "2018-09-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 225306,
                  "date": "2018-08-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 222699,
                  "date": "2018-07-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 220360,
                  "date": "2018-06-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 218355,
                  "date": "2018-05-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 216706,
                  "date": "2018-04-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 215414,
                  "date": "2018-03-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 214456,
                  "date": "2018-02-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 213810,
                  "date": "2018-01-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 213453,
                  "date": "2017-12-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 213342,
                  "date": "2017-11-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 213386,
                  "date": "2017-10-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 213542,
                  "date": "2017-09-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 213743,
                  "date": "2017-08-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 213921,
                  "date": "2017-07-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 213988,
                  "date": "2017-06-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 213899,
                  "date": "2017-05-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 213565,
                  "date": "2017-04-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 212963,
                  "date": "2017-03-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 212005,
                  "date": "2017-02-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 210691,
                  "date": "2017-01-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 208997,
                  "date": "2016-12-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 206859,
                  "date": "2016-11-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 204341,
                  "date": "2016-10-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 201400,
                  "date": "2016-09-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 198103,
                  "date": "2016-08-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 194472,
                  "date": "2016-07-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 190573,
                  "date": "2016-06-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 186451,
                  "date": "2016-05-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 182218,
                  "date": "2016-04-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 177919,
                  "date": "2016-03-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 173686,
                  "date": "2016-02-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 169586,
                  "date": "2016-01-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 165732,
                  "date": "2015-12-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 162190,
                  "date": "2015-11-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 159071,
                  "date": "2015-10-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 156442,
                  "date": "2015-09-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 154348,
                  "date": "2015-08-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 152833,
                  "date": "2015-07-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 151897,
                  "date": "2015-06-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 151540,
                  "date": "2015-05-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 151741,
                  "date": "2015-04-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 152454,
                  "date": "2015-03-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 153590,
                  "date": "2015-02-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 155083,
                  "date": "2015-01-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 156843,
                  "date": "2014-12-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 158759,
                  "date": "2014-11-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 160742,
                  "date": "2014-10-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 162680,
                  "date": "2014-09-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 164551,
                  "date": "2014-08-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 166244,
                  "date": "2014-07-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 167759,
                  "date": "2014-06-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 169096,
                  "date": "2014-05-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 170232,
                  "date": "2014-04-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 171235,
                  "date": "2014-03-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 172148,
                  "date": "2014-02-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 173039,
                  "date": "2014-01-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 173997,
                  "date": "2013-12-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 175089,
                  "date": "2013-11-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 176426,
                  "date": "2013-10-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 178074,
                  "date": "2013-09-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 180080,
                  "date": "2013-08-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 182463,
                  "date": "2013-07-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 185248,
                  "date": "2013-06-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 188412,
                  "date": "2013-05-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 191932,
                  "date": "2013-04-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 195719,
                  "date": "2013-03-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 199707,
                  "date": "2013-02-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 203784,
                  "date": "2013-01-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 207839,
                  "date": "2012-12-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 211782,
                  "date": "2012-11-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 215481,
                  "date": "2012-10-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 218867,
                  "date": "2012-09-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 221830,
                  "date": "2012-08-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 224325,
                  "date": "2012-07-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 226330,
                  "date": "2012-06-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 227801,
                  "date": "2012-05-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 228759,
                  "date": "2012-04-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 229227,
                  "date": "2012-03-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 229249,
                  "date": "2012-02-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 228915,
                  "date": "2012-01-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 228269,
                  "date": "2011-12-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 227400,
                  "date": "2011-11-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 226375,
                  "date": "2011-10-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 225306,
                  "date": "2011-09-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 224214,
                  "date": "2011-08-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 223211,
                  "date": "2011-07-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 222320,
                  "date": "2011-06-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 221563,
                  "date": "2011-05-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 220983,
                  "date": "2011-04-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 220582,
                  "date": "2011-03-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 220360,
                  "date": "2011-02-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 220315,
                  "date": "2011-01-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 220404,
                  "date": "2010-12-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 220627,
                  "date": "2010-11-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 220939,
                  "date": "2010-10-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 221340,
                  "date": "2010-09-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 221785,
                  "date": "2010-08-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 222276,
                  "date": "2010-07-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 222788,
                  "date": "2010-06-28"
                }
              ]
            },
            {
              "__typename": "HistoricalEstimate",
              "source": {
                "__typename": "EstimateSource",
                "type": "corelogic",
                "name": "CoreLogic®"
              },
              "estimates": [
                {
                  "__typename": "EstimateRecord",
                  "estimate": 331500,
                  "date": "2023-05-03"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 331400,
                  "date": "2023-04-25"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 339700,
                  "date": "2023-03-31"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 342700,
                  "date": "2023-02-23"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 337600,
                  "date": "2023-01-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 333700,
                  "date": "2022-12-24"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 332300,
                  "date": "2022-11-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 335400,
                  "date": "2022-10-23"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 335600,
                  "date": "2022-09-27"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 332200,
                  "date": "2022-08-31"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 329800,
                  "date": "2022-07-26"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 324200,
                  "date": "2022-06-30"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 323800,
                  "date": "2022-05-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 303700,
                  "date": "2022-04-27"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 279800,
                  "date": "2022-03-24"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 278500,
                  "date": "2022-02-27"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 273400,
                  "date": "2022-01-17"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 271400,
                  "date": "2021-12-18"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 275200,
                  "date": "2021-11-24"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 269800,
                  "date": "2021-10-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 263600,
                  "date": "2021-09-25"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 261100,
                  "date": "2021-08-04"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 261400,
                  "date": "2021-07-27"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 256500,
                  "date": "2021-06-24"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 247400,
                  "date": "2021-05-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 242300,
                  "date": "2021-04-25"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 235800,
                  "date": "2021-03-30"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 233600,
                  "date": "2021-02-22"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 231200,
                  "date": "2021-01-27"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 232900,
                  "date": "2020-12-23"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 234100,
                  "date": "2020-11-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 234200,
                  "date": "2020-10-26"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 218800,
                  "date": "2020-09-22"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 221500,
                  "date": "2020-08-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 222000,
                  "date": "2020-07-23"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 223300,
                  "date": "2020-06-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 219100,
                  "date": "2020-05-31"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 219100,
                  "date": "2020-04-21"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 217900,
                  "date": "2020-03-24"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 220400,
                  "date": "2020-02-23"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 224100,
                  "date": "2020-01-25"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 221800,
                  "date": "2019-12-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 226500,
                  "date": "2019-11-30"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 225500,
                  "date": "2019-10-23"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 220300,
                  "date": "2019-09-02"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 226600,
                  "date": "2019-08-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 218900,
                  "date": "2019-07-22"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 222200,
                  "date": "2019-06-25"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 216800,
                  "date": "2019-05-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 224600,
                  "date": "2019-04-21"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 222900,
                  "date": "2019-03-24"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 217700,
                  "date": "2019-02-02"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 221500,
                  "date": "2019-01-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 215900,
                  "date": "2018-12-23"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 215900,
                  "date": "2018-11-08"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 215700,
                  "date": "2018-10-30"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 214235,
                  "date": "2018-09-27"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 215300,
                  "date": "2018-08-27"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 216800,
                  "date": "2018-07-31"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 211600,
                  "date": "2018-06-27"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 208700,
                  "date": "2018-05-15"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 213500,
                  "date": "2018-04-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 208400,
                  "date": "2018-03-14"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 208300,
                  "date": "2018-02-26"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 211649,
                  "date": "2018-01-25"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 208500,
                  "date": "2017-12-11"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 207200,
                  "date": "2017-11-24"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 211300,
                  "date": "2017-10-30"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 201400,
                  "date": "2017-09-26"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 202700,
                  "date": "2017-08-30"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 200600,
                  "date": "2017-07-24"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 203400,
                  "date": "2017-06-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 203700,
                  "date": "2017-05-26"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 203900,
                  "date": "2017-04-30"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 204600,
                  "date": "2017-03-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 206200,
                  "date": "2017-02-23"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 206200,
                  "date": "2017-01-30"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 207200,
                  "date": "2016-12-11"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 207500,
                  "date": "2016-11-22"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 207100,
                  "date": "2016-10-25"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 214000,
                  "date": "2016-09-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 214500,
                  "date": "2016-08-24"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 212600,
                  "date": "2016-07-12"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 211800,
                  "date": "2016-06-24"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 211300,
                  "date": "2016-05-30"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 211100,
                  "date": "2016-04-27"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 214500,
                  "date": "2016-03-24"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 213400,
                  "date": "2016-02-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 214500,
                  "date": "2016-01-25"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 215700,
                  "date": "2015-12-31"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 217700,
                  "date": "2015-11-27"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 217900,
                  "date": "2015-10-26"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 224200,
                  "date": "2015-09-24"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 216000,
                  "date": "2015-08-30"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 217000,
                  "date": "2015-07-30"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 217700,
                  "date": "2015-06-26"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 216400,
                  "date": "2015-05-24"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 218200,
                  "date": "2015-04-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 231100,
                  "date": "2015-03-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 232900,
                  "date": "2015-02-24"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 233000,
                  "date": "2015-01-24"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 231400,
                  "date": "2014-12-27"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 233800,
                  "date": "2014-11-26"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 234900,
                  "date": "2014-10-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 236500,
                  "date": "2014-09-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 230400,
                  "date": "2014-08-31"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 230300,
                  "date": "2014-07-25"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 228900,
                  "date": "2014-06-26"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 227800,
                  "date": "2014-05-27"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 236000,
                  "date": "2014-04-30"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 232400,
                  "date": "2014-03-27"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 231500,
                  "date": "2014-02-22"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 223300,
                  "date": "2014-01-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 222900,
                  "date": "2013-12-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 221500,
                  "date": "2013-11-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 223900,
                  "date": "2013-10-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 216250,
                  "date": "2013-09-13"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 208600,
                  "date": "2013-08-27"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 211300,
                  "date": "2013-07-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 212300,
                  "date": "2013-06-29"
                }
              ]
            },
            {
              "__typename": "HistoricalEstimate",
              "source": {
                "__typename": "EstimateSource",
                "type": "quantarium",
                "name": "Quantarium"
              },
              "estimates": [
                {
                  "__typename": "EstimateRecord",
                  "estimate": 335644,
                  "date": "2023-05-03"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 335339,
                  "date": "2023-04-26"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 317482,
                  "date": "2023-03-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 309087,
                  "date": "2023-02-22"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 303749,
                  "date": "2023-01-25"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 314927,
                  "date": "2022-12-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 313015,
                  "date": "2022-11-30"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 307796,
                  "date": "2022-10-26"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 317222,
                  "date": "2022-09-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 307385,
                  "date": "2022-08-31"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 318846,
                  "date": "2022-07-27"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 330963,
                  "date": "2022-06-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 332805,
                  "date": "2022-05-25"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 314986,
                  "date": "2022-04-27"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 320178,
                  "date": "2022-03-30"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 297456,
                  "date": "2022-02-23"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 292651,
                  "date": "2022-01-26"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 288198,
                  "date": "2021-12-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 286030,
                  "date": "2021-11-10"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 303578,
                  "date": "2021-10-20"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 301686,
                  "date": "2021-09-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 293766,
                  "date": "2021-08-25"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 288036,
                  "date": "2021-07-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 283415,
                  "date": "2021-06-30"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 282332,
                  "date": "2021-05-26"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 279024,
                  "date": "2021-04-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 273004,
                  "date": "2021-03-03"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 273043,
                  "date": "2021-02-24"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 272426,
                  "date": "2021-01-27"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 268969,
                  "date": "2020-12-30"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 263354,
                  "date": "2020-11-25"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 247043,
                  "date": "2020-10-28"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 245242,
                  "date": "2020-09-30"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 239237,
                  "date": "2020-08-26"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 245157,
                  "date": "2020-07-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 248700,
                  "date": "2020-06-24"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 235762,
                  "date": "2020-05-27"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 238815,
                  "date": "2020-04-29"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 239044,
                  "date": "2020-03-04"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 239062,
                  "date": "2020-02-26"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 245290,
                  "date": "2020-01-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 245279,
                  "date": "2019-12-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 245453,
                  "date": "2019-11-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 246434,
                  "date": "2019-10-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 244828,
                  "date": "2019-09-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 242646,
                  "date": "2019-08-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 240236,
                  "date": "2019-07-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 235497,
                  "date": "2019-06-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 235267,
                  "date": "2019-05-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 235438,
                  "date": "2019-04-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 235203,
                  "date": "2019-03-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 236536,
                  "date": "2019-02-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 238080,
                  "date": "2019-01-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 238938,
                  "date": "2018-12-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 239216,
                  "date": "2018-11-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 238738,
                  "date": "2018-10-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 237366,
                  "date": "2018-09-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 235666,
                  "date": "2018-08-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 233101,
                  "date": "2018-07-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 232264,
                  "date": "2018-06-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 231732,
                  "date": "2018-05-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 231196,
                  "date": "2018-04-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 230925,
                  "date": "2018-03-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 230246,
                  "date": "2018-02-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 228216,
                  "date": "2018-01-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 226187,
                  "date": "2017-12-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 225619,
                  "date": "2017-11-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 224762,
                  "date": "2017-10-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 223101,
                  "date": "2017-09-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 220724,
                  "date": "2017-08-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 219587,
                  "date": "2017-07-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 217910,
                  "date": "2017-06-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 217212,
                  "date": "2017-05-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 217014,
                  "date": "2017-04-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 217306,
                  "date": "2017-03-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 217260,
                  "date": "2017-02-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 217076,
                  "date": "2017-01-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 216597,
                  "date": "2016-12-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 215664,
                  "date": "2016-11-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 214403,
                  "date": "2016-10-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 213424,
                  "date": "2016-09-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 212162,
                  "date": "2016-08-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 211155,
                  "date": "2016-07-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 210436,
                  "date": "2016-06-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 209211,
                  "date": "2016-05-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 207901,
                  "date": "2016-04-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 207361,
                  "date": "2016-03-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 207110,
                  "date": "2016-02-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 207300,
                  "date": "2016-01-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 206760,
                  "date": "2015-12-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 206155,
                  "date": "2015-11-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 205999,
                  "date": "2015-10-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 205831,
                  "date": "2015-09-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 204990,
                  "date": "2015-08-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 203927,
                  "date": "2015-07-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 201913,
                  "date": "2015-06-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 200954,
                  "date": "2015-05-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 200924,
                  "date": "2015-04-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 200434,
                  "date": "2015-03-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 200040,
                  "date": "2015-02-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 200643,
                  "date": "2015-01-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 200744,
                  "date": "2014-12-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 200933,
                  "date": "2014-11-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 201095,
                  "date": "2014-10-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 201296,
                  "date": "2014-09-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 200839,
                  "date": "2014-08-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 199681,
                  "date": "2014-07-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 198227,
                  "date": "2014-06-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 196609,
                  "date": "2014-05-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 195834,
                  "date": "2014-04-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 195631,
                  "date": "2014-03-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 194838,
                  "date": "2014-02-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 194540,
                  "date": "2014-01-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 193008,
                  "date": "2013-12-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 192201,
                  "date": "2013-11-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 191450,
                  "date": "2013-10-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 190326,
                  "date": "2013-09-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 189338,
                  "date": "2013-08-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 187634,
                  "date": "2013-07-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 186039,
                  "date": "2013-06-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 185197,
                  "date": "2013-05-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 184178,
                  "date": "2013-04-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 183027,
                  "date": "2013-03-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 181966,
                  "date": "2013-02-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 181362,
                  "date": "2013-01-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 181073,
                  "date": "2012-12-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 180483,
                  "date": "2012-11-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 179797,
                  "date": "2012-10-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 178902,
                  "date": "2012-09-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 177370,
                  "date": "2012-08-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 176202,
                  "date": "2012-07-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 175003,
                  "date": "2012-06-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 174137,
                  "date": "2012-05-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 174123,
                  "date": "2012-04-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 173812,
                  "date": "2012-03-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 173603,
                  "date": "2012-02-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 174240,
                  "date": "2012-01-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 174808,
                  "date": "2011-12-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 175208,
                  "date": "2011-11-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 176117,
                  "date": "2011-10-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 176557,
                  "date": "2011-09-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 176253,
                  "date": "2011-08-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 176762,
                  "date": "2011-07-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 177394,
                  "date": "2011-06-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 178381,
                  "date": "2011-05-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 179858,
                  "date": "2011-04-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 181461,
                  "date": "2011-03-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 182551,
                  "date": "2011-02-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 183570,
                  "date": "2011-01-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 184987,
                  "date": "2010-12-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 186088,
                  "date": "2010-11-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 187573,
                  "date": "2010-10-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 188711,
                  "date": "2010-09-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 189383,
                  "date": "2010-08-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 190014,
                  "date": "2010-07-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 190522,
                  "date": "2010-06-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 190827,
                  "date": "2010-05-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 191685,
                  "date": "2010-04-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 193869,
                  "date": "2010-03-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 194446,
                  "date": "2010-02-01"
                }
              ]
            }
          ],
          "forecast_values": [
            {
              "__typename": "ForecastEstimate",
              "source": {
                "__typename": "EstimateSource",
                "type": "quantarium",
                "name": "Quantarium"
              },
              "estimates": [
                {
                  "__typename": "EstimateRecord",
                  "estimate": 336331,
                  "date": "2023-06-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 336858,
                  "date": "2023-07-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 337328,
                  "date": "2023-08-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 337777,
                  "date": "2023-09-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 338213,
                  "date": "2023-10-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 338641,
                  "date": "2023-11-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 339062,
                  "date": "2023-12-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 339476,
                  "date": "2024-01-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 339884,
                  "date": "2024-02-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 340285,
                  "date": "2024-03-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 340679,
                  "date": "2024-04-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 341067,
                  "date": "2024-05-01"
                }
              ]
            },
            {
              "__typename": "ForecastEstimate",
              "source": {
                "__typename": "EstimateSource",
                "type": "collateral",
                "name": "Collateral Analytics"
              },
              "estimates": [
                {
                  "__typename": "EstimateRecord",
                  "estimate": 353207,
                  "date": "2023-05-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 353414,
                  "date": "2023-06-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 353621,
                  "date": "2023-07-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 353819,
                  "date": "2023-08-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 354016,
                  "date": "2023-09-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 354214,
                  "date": "2023-10-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 354365,
                  "date": "2023-11-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 354515,
                  "date": "2023-12-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 354666,
                  "date": "2024-01-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 354857,
                  "date": "2024-02-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 355047,
                  "date": "2024-03-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 355237,
                  "date": "2024-04-01"
                }
              ]
            },
            {
              "__typename": "ForecastEstimate",
              "source": {
                "__typename": "EstimateSource",
                "type": "corelogic",
                "name": "CoreLogic®"
              },
              "estimates": [
                {
                  "__typename": "EstimateRecord",
                  "estimate": 334177,
                  "date": "2023-06-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 336394,
                  "date": "2023-07-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 338219,
                  "date": "2023-08-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 339435,
                  "date": "2023-09-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 340401,
                  "date": "2023-10-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 341322,
                  "date": "2023-11-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 341734,
                  "date": "2023-12-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 342292,
                  "date": "2024-01-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 343159,
                  "date": "2024-02-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 344723,
                  "date": "2024-03-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 346919,
                  "date": "2024-04-01"
                },
                {
                  "__typename": "EstimateRecord",
                  "estimate": 349471,
                  "date": "2024-05-01"
                }
              ]
            }
          ]
        },
        "virtual_tours": [
          {
            "__typename": "VirtualTour",
            "href": "https://22698athlonedrive.nm.brokersedge.com/"
          }
        ]
      }
    }
  }