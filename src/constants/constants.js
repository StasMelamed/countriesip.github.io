export const allUrl = 'https://countryapi.io/api/all';
export const countryUrl = 'https://countryapi.io/api/name/';
export const allCountriesUrl = 'https://countryapi.io/api/all';
export const token = '9vHjCNAghAmDJ1oxxjv6gnePvyaRg6G5ex1lYDl6';

export const worldPopulation = 8028504258;

export const europePopulation = 607838000;
export const asiaPopulation = 4720000000;
export const africaPopulation = 900000000;
export const nAmericaPopulation = 579000000;
export const sAmericaPopulation = 442860000;
export const AmericasPopulation = 1021860000;

export const europeArea = 10180000;
export const asiaArea = 27700000;
export const africaArea = 29200000;
export const americasArea = 42549000;
export const australiaArea = 7692024;

export const testData = {
    ru: {
      name: 'Russia',
      official_name: 'Russian Federation',
      topLevelDomain: [
        '.ru'
      ],
      alpha2Code: 'RU',
      alpha3Code: 'RUS',
      cioc: 'RUS',
      numericCode: '643',
      callingCode: '+73',
      capital: 'Moscow',
      altSpellings: [
        'RU',
        'Russian Federation',
        'Российская Федерация'
      ],
      region: 'Europe',
      subregion: 'Eastern Europe',
      population: 144104080,
      latLng: {
        country: [
          60,
          100
        ],
        capital: [
          55.75,
          37.6
        ]
      },
      demonyms: {
        eng: {
          f: 'Russian',
          m: 'Russian'
        },
        fra: {
          f: 'Russe',
          m: 'Russe'
        }
      },
      area: 17098242,
      gini: {
        '2018': 37.5
      },
      timezones: [
        'UTC+03:00',
        'UTC+04:00',
        'UTC+06:00',
        'UTC+07:00',
        'UTC+08:00',
        'UTC+09:00',
        'UTC+10:00',
        'UTC+11:00',
        'UTC+12:00'
      ],
      borders: [
        'AZE',
        'BLR',
        'CHN',
        'EST',
        'FIN',
        'GEO',
        'KAZ',
        'PRK',
        'LVA',
        'LTU',
        'MNG',
        'NOR',
        'POL',
        'UKR'
      ],
      nativeNames: {
        rus: {
          official: 'Российская Федерация',
          common: 'Россия'
        }
      },
      currencies: {
        RUB: {
          name: 'Russian ruble',
          symbol: '₽'
        }
      },
      languages: {
        rus: 'Russian'
      },
      translations: {
        ara: 'روسيا',
        ces: 'Rusko',
        cym: 'Russia',
        deu: 'Russland',
        est: 'Venemaa',
        fin: 'Venäjä',
        fra: 'Russie',
        hrv: 'Rusija',
        hun: 'Oroszország',
        ita: 'Russia',
        jpn: 'ロシア連邦',
        kor: '러시아',
        nld: 'Rusland',
        per: 'روسیه',
        pol: 'Rosja',
        por: 'Rússia',
        rus: 'Россия',
        slk: 'Rusko',
        spa: 'Rusia',
        swe: 'Ryssland',
        urd: 'روس',
        zho: '俄罗斯'
      },
      flag: {
        small: 'https://flagcdn.com/24x18/ru.png',
        medium: 'https://flagcdn.com/96x72/ru.png',
        large: 'https://flagcdn.com/256x192/ru.png'
      },
      regionalBlocs: [
        {
          acronym: 'EEU',
          name: 'Eurasian Economic Union',
          otherAcronyms: [
            'EAEU'
          ]
        }
      ]
    }
  }


 export const columns =  [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Official name",
      accessor: "official_name",
    },
    { Header:'Capital',
      accessor:'capital'
    },
    { Header:'Region',
      accessor:'region'
    },
    { Header:'Subregion',
      accessor:'subregion'
    },
    { Header:'Population',
      accessor:'population'
    },
    { Header:'Area',
      accessor:'area'
    },
    { Header:'Currencies',
      accessor:(props)=>
        <>
        <li>{Object.values(props.currencies)[0].name}</li>
        <li>{Object.values(props.currencies)[0].symbol}</li>
        </>
    },
    { Header:'Timezones',
      accessor:props=>props.timezones.map(item=>{
        return <li>{item}</li>
      })
    },
    { Header:'Borders',
      accessor:props=>
        props.borders!='N/A'?
        props.borders.map(item=>{
        return <li>{item}</li>
      }):<li>N/A</li>
    },
    { Header:'Flag',
      accessor:props => 
        <img src={props.flag.small}/>
    },
    {
      Header:'Native Names',
      accessor: props=>
        <>
        <li>{Object.values(props.nativeNames)[0].official}</li>
        <li>{Object.values(props.nativeNames)[0].common}</li>
        </>
                    
    }
    
  ];

export const allCountriesNames =['Afghanistan','Sudan','Burundi','Mexico','Cuba','Serbia','Monaco','Bhutan','Guyana','South Georgia','Bosnia and Herzegovina','Brunei','Pakistan','Kenya','Puerto Rico','Somalia','Svalbard and Jan Mayen','Sierra Leone','French Polynesia','Azerbaijan','Cook Islands','Peru','Bouvet Island','Northern Mariana Islands','Angola','Republic of the Congo','South Sudan','Saint Martin','Turkey','Anguilla','Saint Kitts and Nevis','Aruba','Turks and Caicos Islands','Taiwan','Sweden','Liberia','Venezuela','United States Virgin Islands','Bermuda','Albania','Hong Kong','Luxembourg','Eritrea','Colombia','Caribbean Netherlands','Mongolia','Yemen','Lebanon','Antigua and Barbuda','Vietnam','Palau','Jersey','Trinidad and Tobago','Israel','Bulgaria','Portugal','Gibraltar','San Marino','Singapore','Sint Maarten','Saudi Arabia','Ghana','Moldova','Chad','Antarctica','United Kingdom','Papua New Guinea','French Southern and Antarctic Lands','United States Minor Outlying Islands','Belize','Comoros','Burkina Faso','Faroe Islands','Guinea','India','Curaçao','Togo','Tunisia','Saint Barthélemy','Indonesia','Micronesia','Austria','Tajikistan','DR Congo','Mayotte','Réunion','Romania','Qatar','Lithuania','China','New Zealand','Norfolk Island','Mauritania','Uzbekistan','Finland','Cameroon','Heard Island and McDonald Islands','Dominica','Iceland','Oman','North Macedonia','Liechtenstein','Spain','Greece','Paraguay','Bahrain','Niue','Senegal','Montserrat','Latvia','Tokelau','Japan','Central African Republic','Gabon','Iraq','Isle of Man','Myanmar','Montenegro','Nauru','Vanuatu','France','Zimbabwe','Philippines','Slovakia','Australia','Ivory Coast','British Indian Ocean Territory','Eswatini','Rwanda','Benin','British Virgin Islands','Uganda','Ireland','Iran','Slovenia','Mali','Switzerland','American Samoa','Uruguay','Guam','Suriname','Ukraine','Czechia','Honduras','Samoa','Laos','Cape Verde','Ethiopia','Bangladesh','Saint Helena',' Ascension and Tristan da Cunha','Belarus','Croatia','Kuwait','French Guiana','Morocco','Russia','Estonia','Sri Lanka','New Caledonia','Poland','Madagascar','Costa Rica','El Salvador','Macau','Andorra','Italy','Namibia','Seychelles','Panama','Haiti','Argentina','Niger','Malawi','Pitcairn Islands','Germany','Kiribati','Syria','Marshall Islands','Hungary','Cayman Islands','Denmark','Saint Lucia','Bolivia','Djibouti','South Africa','Nigeria','São Tomé and Príncipe','Nicaragua','Guadeloupe','Saint Pierre and Miquelon','Ecuador','Greenland','Grenada','Bahamas','Chile','Malaysia','Tuvalu','Christmas Island','Solomon Islands','Tanzania','North Korea','Guinea-Bissau','Kosovo','Vatican City','Norway','Palestine','Cocos (Keeling) Islands','Jamaica','Egypt','Cambodia','Mauritius','Gambia','Equatorial Guinea','Lesotho','Martinique','United States','Western Sahara','United Arab Emirates','Mozambique','Algeria','Zambia','Guatemala','South Korea','Kyrgyzstan','Timor-Leste','Åland Islands','Jordan','Malta','Cyprus','Falkland Islands','Kazakhstan','Botswana','Saint Vincent and the Grenadines','Barbados','Tonga','Thailand','Belgium','Canada','Georgia','Wallis and Futuna','Fiji','Netherlands','Armenia','Dominican Republic','Guernsey','Turkmenistan','Nepal','Maldives','Libya','Brazil'];

  

  


