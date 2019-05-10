(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{177:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"mining"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mining","aria-hidden":"true"}},[t._v("#")]),t._v(" Mining")]),t._v(" "),a("p",[t._v("The following RPC calls interact with the "),a("code",[t._v("komodod")]),t._v(" software, and are made available through the "),a("code",[t._v("komodo-cli")]),t._v(" software.")]),t._v(" "),a("h2",{attrs:{id:"getblocksubsidy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getblocksubsidy","aria-hidden":"true"}},[t._v("#")]),t._v(" getblocksubsidy")]),t._v(" "),a("p",[a("strong",[t._v("getblocksubsidy height_number")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("getblocksubsidy")]),t._v(" method returns the block-subsidy reward. The resulting calculation takes into account the mining slow start. This method can be used in conjunction with custom mining rewards designed by the developers of a KMD-based asset chain.")]),t._v(" "),a("h3",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("true/false")]),t._v(" "),a("td",[t._v("(boolean)")]),t._v(" "),a("td",[t._v("indicates whether the server is set to generate coins")])])])]),t._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response","aria-hidden":"true"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("{")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v('"miner"')]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("the mining reward amount")])]),t._v(" "),a("tr",[a("td",[t._v("}")]),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('command:\n\nkomodo-cli getblocksubsidy 100\n\nresponse:\n\n{\n  "miner": 0.00010000\n}\n')])])]),a("blockquote",[a("p",[t._v("You can find your rpcuser, rpcpassword, and rpcport in the coin's .conf file.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('command:\n\ncurl --user myrpcuser:myrpcpassword --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getblockubsidy", "params": [1000] }\' -H \'content-type: text/plain;\' http://127.0.0.1:myrpcport/\n\nresponse:\n')])])]),a("h2",{attrs:{id:"getblocktemplate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getblocktemplate","aria-hidden":"true"}},[t._v("#")]),t._v(" getblocktemplate")]),t._v(" "),a("p",[a("strong",[t._v('getblocktemplate ( "jsonrequestobject" )')])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("getblocktemplate")]),t._v(" method returns data that is necessary to construct a block.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://en.bitcoin.it/wiki/BIP_0022"}},[t._v("the Bitcoin wiki")]),t._v(" for full specification.")])]),t._v(" "),a("p",[t._v("If the request parameters include a "),a("code",[t._v("mode")]),t._v(" key, it is used to explicitly select between the default 'template' request or a 'proposal'.")]),t._v(" "),a("h3",{attrs:{id:"arguments-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"jsonrequestobject"')]),t._v(" "),a("td",[t._v("(string, optional)")]),t._v(" "),a("td",[t._v("a json object in the following spec")])]),t._v(" "),a("tr",[a("td",[t._v("{")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v('"mode"')]),t._v(" "),a("td",[t._v("(string, optional)")]),t._v(" "),a("td",[t._v('can be: "template"')])]),t._v(" "),a("tr",[a("td",[t._v('"capabilities":')]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v('"support"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v('client side supported features: "longpoll", "coinbasetxn", "coinbasevalue", "proposal", "serverlist", "workid"')])]),t._v(" "),a("tr",[a("td",[t._v(",")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("]")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("}")]),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("{")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v('"version"')]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("the block version")])]),t._v(" "),a("tr",[a("td",[t._v('"previousblockhash"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("the hash of current highest block")])]),t._v(" "),a("tr",[a("td",[t._v('"transactions"')]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("{")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v('"data"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("transaction data encoded in hexadecimal (byte-for-byte)")])]),t._v(" "),a("tr",[a("td",[t._v('"hash"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("hash/id encoded in little-endian hexadecimal")])]),t._v(" "),a("tr",[a("td",[t._v('"depends"')]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("number")]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v('transactions before this one (by 1-based index in "transactions" list) that must be present in the final block, if this one is')])]),t._v(" "),a("tr",[a("td",[t._v(",")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("],")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v('"fee"')]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("the difference in value between transaction inputs and outputs (in Satoshis). For coinbase transactions, this is a negative number of the total collected block fees (ie, not including the block subsidy). If a key is not present, the fee is unknown and clients MUST NOT assume it is not present.")])]),t._v(" "),a("tr",[a("td",[t._v('"sigops"')]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("total number of sigops, as counted for the purposes of block limits; if a key is not present, the sigop count is unknown and clients MUST NOT assume they are not present.")])]),t._v(" "),a("tr",[a("td",[t._v('"required"')]),t._v(" "),a("td",[t._v("(boolean)")]),t._v(" "),a("td",[t._v("if provided and true, this transaction must be in the final block")])]),t._v(" "),a("tr",[a("td",[t._v("}")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v(",")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("],")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v('"coinbasetxn"')]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("...")]),t._v(" "),a("td",[t._v("(json object)")]),t._v(" "),a("td",[t._v("information for coinbase transaction")])]),t._v(" "),a("tr",[a("td",[t._v("},")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v('"target"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("the hash target")])]),t._v(" "),a("tr",[a("td",[t._v('"mintime"')]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("the minimum timestamp appropriate for next block time in seconds since epoch (Jan 1 1970 GMT)")])]),t._v(" "),a("tr",[a("td",[t._v('"mutable"')]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v('"value"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v('a way the block template may be changed, e.g. "time", "transactions", "prevblock"')])]),t._v(" "),a("tr",[a("td",[t._v(",")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("],")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v('"noncerange"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("a range of valid nonces")])]),t._v(" "),a("tr",[a("td",[t._v('"sigoplimit"')]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("limit of sigops in blocks")])]),t._v(" "),a("tr",[a("td",[t._v('"sizelimit"')]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("limit of block size")])]),t._v(" "),a("tr",[a("td",[t._v('"curtime"')]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("current timestamp in seconds since epoch (Jan 1 1970 GMT)")])]),t._v(" "),a("tr",[a("td",[t._v('"bits"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("compressed target of next block")])]),t._v(" "),a("tr",[a("td",[t._v('"height"')]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("the height of the next block")])]),t._v(" "),a("tr",[a("td",[t._v("}")]),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"examples-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('command:\n\nkomodo-cli getblocktemplate \'{"mode":"template","capabilities":["workid"]}\'\n\nresponse:\n\n{\n  "capabilities": [\n    "proposal"\n  ],\n  "version": 4,\n  "previousblockhash": "0ec57dbbaa7fdb290b847981e38908482b1be05f375f021c4d1f6f6315fd5c7e",\n  "transactions": [\n  ],\n  "coinbasetxn": {\n    "data": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0503d7590f00ffffffff0100a3e111000000002321029400ae04d9c0e3e49b114fc5e0a7e250ece5f5b5b8f1614075ddfd62c67319aeac1ba2985b",\n    "hash": "6af34ca0711ff5c7d3b4d2334ec55f4995014261f3c537446537169f9b96b0d6",\n    "depends": [\n    ],\n    "fee": 0,\n    "sigops": 1,\n    "coinbasevalue": 300000000,\n    "required": true\n  },\n  "longpollid": "0ec57dbbaa7fdb290b847981e38908482b1be05f375f021c4d1f6f6315fd5c7e39",\n  "target": "000000070be50000000000000000000000000000000000000000000000000000",\n  "mintime": 1536729153,\n  "mutable": [\n    "time",\n    "transactions",\n    "prevblock"\n  ],\n  "noncerange": "00000000ffffffff",\n  "sigoplimit": 20000,\n  "sizelimit": 2000000,\n  "curtime": 1536729628,\n  "bits": "1d070be5",\n  "height": 1006039\n}\n')])])]),a("blockquote",[a("p",[t._v("You can find your rpcuser, rpcpassword, and rpcport in the coin's .conf file.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('command:\n\ncurl --user myrpcuser:myrpcpassword --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getblocktemplate", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:myrpcport/\n\nresponse:\n\n{\n  "result": {\n    "capabilities": [\n      "proposal"\n    ],\n    "version": 4,\n    "previousblockhash": "0c77fb62dcabffd39c0b4ad79da9a51ecc4265158b01ae09d7fd70f93ab7d499",\n    "transactions": [\n      {\n        "data": "010000000d0bf48c25bbb9e5c9cf2959c39ea62266784932a17a8fe1ad190197c398e341870200000048473044022071db2fad2d5bab5f6cf8e2d415fe9cfbc146fc561ce55c379044d5eab7206e1b0220296970cf0265e28a49ac525faef6114386d2ed5c8ea2ced9ccfcd37ca4563bf401ffffffff50aca334345c7b4e7285d883d58efeb74c43e58d4fa61bac21f922a014f292aa1700000048473044022038f17fe42006a3f30ff658f0c8b1495567ffd0dbbe4ba36229df4bcabce201740220516ed6fca4a453f3305b47315d5efd2b230b3a575cb506cb04c89a730a62eade01ffffffff73e2bd82aa10c0bf751d7eabff50209e46827294c2b77932a096f89f7a4aa631210000004847304402200d7f4c2b8a537c98e19f0044d97c0d5ee6afb598d9b4523d586ec39b5be68ed0022071c5587f347bf56b0d1a340e6326c1ec612ee6a77abf5a24e93a446eeaee31af01ffffffffc335b0a285d04766b560bec88c191ed4494bb7e6e964eba1f5ccde3a89ad2e5a0100000049483045022100dce3c8e92b1487bb39681e58634f6414df14bf848b4a0de3ce11e2ddd4b5836202201e8ce810a67fb84350c62e3c5ed28bc1350d754f3a61a3c1a85e824c946fb30801ffffffff2ed2a51a1f8fe7feb456fa21c4ae172733d921c933e0ddc1368cfd9e09a746e5030000004847304402204f2c0eee23e34937b624e8ec4f0221ad3a43787fdbaa5b936ac39d2a3d30d7fe02200fd6e39b0eac4cbd80601f9625b40152e3bad6115f4d1e158b8709aa215778fb01ffffffff31b2c613750303538593437354af923637ee972932d1997fc93bf8d9199ebe905c000000494830450221008c760aef6b34d79e7076b6c249506c91070931f641039f44243e6abf798c731d02203c9a44d0adb04e64956720b4a97b49944825fa704679c21b18679a63c98e99ec01ffffffff0a81b4834feaa5f1044540928290e6d19667ede024923836d94bac13c7c9237914000000494830450221009d8ceb46e48dc0e86e13b0a549efbedc95ca199e1068f8e5e1f31cf4460dee3f022005079476092ac474c42ffae9fcf49fba82f68c94637ea97add61a5b1a147badb01ffffffffd81465cb221c3374a0a69bffc9f2bc225249328c50badd8683c351b2c30fdb171700000048473044022039da2916a77777c77b1a97840d1a888f2b12f0994ad134c8075a0b659884211a022006cbb6c807d1814b88f280e0036306e6d73cc79c0b6ff60966f47161feaccb3e01ffffffff59128ea85b2240d8b781a00b1ad0ebcdd8502d8d3f5722878f963b7f601e1d69020000004847304402203374d06656f35edf5d1b0d16455da2d6f22520a00c948a9c1d6bf51dba7a70ef0220529ec3146e080a637118b891a6b739f58e6f57d2aa3a24759a39eb6696af36ac01ffffffffc7d79714f379e9de8d752861f27d7e4685137dc6db5ad2cd50ec7b36429826d7050000004847304402207a426bb189ac657a9e8b699c67091de8df28306ce67b14653aea561800dfcb1502207e00216a6ff84e3f5b6d82c0683d8ea72a9fd6f636f9b3102b657e09a5f7481501ffffffffd872945ebfef211230ad8147f994892ab45c6cb4710ac29950e40354e1861d78e300000049483045022100af153b219376ffcbef42bd900e678d2504a6acd7c2bf945dcae895a9f07da79702201615016f196ad9452755d9c303fa151c242ed963b5373d148db733482487e8af01ffffffff671edc29af69a848081dd3790afb3fb113377d995e34ea9f219331d5c18c6885ad000000484730440220572ad6110ca5bafd749cfb77740f1aaac35e18c4a814cfb771c5286dd8b1249802207f4a27b90ff91663ee8ec6fc14dae64d16274fd2e35069ac6891de0385740a9801ffffffffba4dc1b3ef20747310640e4e0337c8db570ec63fa62eeffc492098502eaa9a2e5700000049483045022100f3ac3b80a66b6f1e6f96faf15a6535b104fbba987b357732e5b45830841a0a0a02202fee1f97494b2232a32517272d49992612729f4d9f762ede8d9b06ddf294293001ffffffff02f0810100000000002321020e46e79a2a8d12b9b5d12c7a91adb4e454edfae43c0a0cb805427d2ac7613fd9ac0000000000000000506a4c4da83be8f6e61cb9837708c1a847bdd80b8b8c1e1b9067b338433ca6c663869d004c6e01004345414c00e76cb540d63746c82676637b51e4f9f894c444822844224dd840975c7652dd760e00000000000000",\n        "hash": "14473b8754bf69cc365784633e1a80787d4f9f950c95c48af0c6a28983c31098",\n        "depends": [],\n        "fee": 31200,\n        "sigops": 1\n      }\n    ],\n    "coinbasetxn": {\n      "data": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0503e6590f00ffffffff01a010e311000000002321029400ae04d9c0e3e49b114fc5e0a7e250ece5f5b5b8f1614075ddfd62c67319aeac57a4985b",\n      "hash": "334b02c0c2fa087862f845fefbd8f6ac4b72e4aed6d024f22b7fa0aa84759006",\n      "depends": [],\n      "fee": -93600,\n      "sigops": 1,\n      "coinbasevalue": 300000000,\n      "required": true\n    },\n    "longpollid": "0c77fb62dcabffd39c0b4ad79da9a51ecc4265158b01ae09d7fd70f93ab7d499147",\n    "target": "0000000670be0000000000000000000000000000000000000000000000000000",\n    "mintime": 1536729888,\n    "mutable": [\n      "time",\n      "transactions",\n      "prevblock"\n    ],\n    "noncerange": "00000000ffffffff",\n    "sigoplimit": 20000,\n    "sizelimit": 2000000,\n    "curtime": 1536730200,\n    "bits": "1d0670be",\n    "height": 1006054\n  },\n  "error": null,\n  "id": "curltest"\n}\n')])])]),a("h2",{attrs:{id:"getlocalsolps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getlocalsolps","aria-hidden":"true"}},[t._v("#")]),t._v(" getlocalsolps")]),t._v(" "),a("p",[a("strong",[t._v("getlocalsolps")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("getlocalsolps")]),t._v(" method returns the average local solutions per second since this node was started.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("This is the same information shown on the metrics screen (if enabled).")])]),t._v(" "),a("h3",{attrs:{id:"arguments-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("(none)")]),t._v(" "),a("td",[t._v("(none)")]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"response-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"data"')]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("solutions per second average")])])])]),t._v(" "),a("h3",{attrs:{id:"examples-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("command:\n\nkomodo-cli getlocalsolps\n\nresponse:\n\n0.4141607577247555\n")])])]),a("blockquote",[a("p",[t._v("You can find your rpcuser, rpcpassword, and rpcport in the coin's .conf file.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('command:\n\ncurl --user myrpcuser:myrpcpassword --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getlocalsolps", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:myrpcport/\n\nresponse:\n\n{\n  "result": 0.4141607577247555,\n  "error": null,\n  "id": "curltest"\n}\n')])])]),a("h2",{attrs:{id:"getmininginfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getmininginfo","aria-hidden":"true"}},[t._v("#")]),t._v(" getmininginfo")]),t._v(" "),a("p",[a("strong",[t._v("getmininginfo")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("getmininginfo")]),t._v(" method returns a json object containing mining-related information.")]),t._v(" "),a("h3",{attrs:{id:"arguments-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-4","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("(none)")]),t._v(" "),a("td",[t._v("(none)")]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"response-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-4","aria-hidden":"true"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("{")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v('"blocks"')]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("the current block")])]),t._v(" "),a("tr",[a("td",[t._v('"currentblocksize"')]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("the last block size")])]),t._v(" "),a("tr",[a("td",[t._v('"currentblocktx"')]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("the last block transaction")])]),t._v(" "),a("tr",[a("td",[t._v('"difficulty"')]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("the current difficulty")])]),t._v(" "),a("tr",[a("td",[t._v('"errors":')]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v('"generate"')]),t._v(" "),a("td",[t._v("(boolean)")]),t._v(" "),a("td",[t._v("if the generation is on or off (see "),a("a",{attrs:{href:"#getgenerate"}},[t._v("getgenerate")]),t._v(" or "),a("a",{attrs:{href:"#setgenerate"}},[t._v("setgenerate")]),t._v(" calls)")])]),t._v(" "),a("tr",[a("td",[t._v('"genproclimit"')]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("the processor limit for generation; -1 if no generation (see"),a("a",{attrs:{href:"#getgenerate"}},[t._v("getgenerate")]),t._v(" or "),a("a",{attrs:{href:"#setgenerate"}},[t._v("setgenerate")]),t._v(" calls)")])]),t._v(" "),a("tr",[a("td",[t._v('"localsolps"')]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("the average local solution rate (solutions per second) since this node was started")])]),t._v(" "),a("tr",[a("td",[t._v('"networksolps"')]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("the estimated network solution rate (solutions per second)")])]),t._v(" "),a("tr",[a("td",[t._v('"pooledtx":')]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v('"testnet"')]),t._v(" "),a("td",[t._v("(boolean)")]),t._v(" "),a("td",[t._v("if using testnet or not")])]),t._v(" "),a("tr",[a("td",[t._v('"chain"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("current network name as defined in BIP70 (main, test, regtest)")])]),t._v(" "),a("tr",[a("td",[t._v("}")]),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"examples-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-4","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('command:\n\nkomodo-cli getmininginfo\n\nresponse:\n\n{\n  "blocks": 1007341,\n  "currentblocksize": 0,\n  "currentblocktx": 0,\n  "difficulty": 42918151.0730477,\n  "errors": "",\n  "genproclimit": -1,\n  "localsolps": 0,\n  "networksolps": 11414148,\n  "networkhashps": 11414148,\n  "pooledtx": 5,\n  "testnet": false,\n  "chain": "main",\n  "generate": false,\n  "numthreads": -1\n}\n')])])]),a("blockquote",[a("p",[t._v("You can find your rpcuser, rpcpassword, and rpcport in the coin's .conf file.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('command:\n\ncurl --user myrpcuser:myrpcpassword --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getmininginfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:myrpcport/\n\nresponse:\n\n{\n  "result": {\n    "blocks": 1007341,\n    "currentblocksize": 0,\n    "currentblocktx": 0,\n    "difficulty": 42918151.0730477,\n    "errors": "",\n    "genproclimit": -1,\n    "localsolps": 0,\n    "networksolps": 11414148,\n    "networkhashps": 11414148,\n    "pooledtx": 11,\n    "testnet": false,\n    "chain": "main",\n    "generate": false,\n    "numthreads": -1\n  },\n  "error": null,\n  "id": "curltest"\n}\n')])])]),a("h2",{attrs:{id:"getnetworkhashps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getnetworkhashps","aria-hidden":"true"}},[t._v("#")]),t._v(" getnetworkhashps")]),t._v(" "),a("p",[a("strong",[t._v("getnetworkhashps ( blocks height )")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("getnetworkhashps")]),t._v(" method returns the estimated network solutions per second based on the last "),a("code",[t._v("n")]),t._v(" blocks.")]),t._v(" "),a("p",[t._v("Pass in "),a("code",[t._v("blocks")]),t._v(" value to override the default number of blocks. Passing in "),a("code",[t._v("-1")]),t._v(" will return a value based on the average hashps of the relevant difficulty window.")]),t._v(" "),a("p",[t._v("Pass in "),a("code",[t._v("height")]),t._v(" to estimate the network speed at the time when a certain block was found.")]),t._v(" "),a("h3",{attrs:{id:"arguments-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-5","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("blocks")]),t._v(" "),a("td",[t._v("(numeric, optional, default=120)")]),t._v(" "),a("td",[t._v("the number of blocks (use -1 to calculate over the relevant difficulty averaging window)")])]),t._v(" "),a("tr",[a("td",[t._v("height")]),t._v(" "),a("td",[t._v("(numeric, optional, default=-1)")]),t._v(" "),a("td",[t._v("to estimate at the time of the given height")])])])]),t._v(" "),a("h3",{attrs:{id:"response-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-5","aria-hidden":"true"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("solutions per second estimated")])])])]),t._v(" "),a("h3",{attrs:{id:"examples-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-5","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("command:\n\nkomodo-cli getnetworkhashps\n\nresponse:\n\n10724120\n")])])]),a("blockquote",[a("p",[t._v("You can find your rpcuser, rpcpassword, and rpcport in the coin's .conf file.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('command:\n\ncurl --user myrpcuser:myrpcpassword --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getnetworkhashps", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:myrpcport/\n\nresponse:\n\n{\n  "result": 10449287,\n  "error": null,\n  "id": "curltest"\n}\n')])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("DEPRECATED: Use "),a("b",[t._v("getnetworksolps")]),t._v(" instead.")])]),t._v(" "),a("h2",{attrs:{id:"getnetworksolps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getnetworksolps","aria-hidden":"true"}},[t._v("#")]),t._v(" getnetworksolps")]),t._v(" "),a("p",[a("strong",[t._v("getnetworksolps ( blocks height )")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("getnetworksolps")]),t._v(" method returns the estimated network solutions per second based on the last "),a("code",[t._v("n")]),t._v(" blocks.")]),t._v(" "),a("p",[t._v("Pass in "),a("code",[t._v("blocks")]),t._v(" to override the default number of blocks. Use -1 to calculate according to the relevant difficulty averaging window.\nPass in "),a("code",[t._v("height")]),t._v(" to estimate the network speed at the time when a certain block was found.")]),t._v(" "),a("h3",{attrs:{id:"arguments-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-6","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("blocks")]),t._v(" "),a("td",[t._v("(numeric, optional, default=120)")]),t._v(" "),a("td",[t._v("the number of blocks; use -1 to calculate according to the relevant difficulty averaging window")])]),t._v(" "),a("tr",[a("td",[t._v("height")]),t._v(" "),a("td",[t._v("(numeric, optional, default=-1)")]),t._v(" "),a("td",[t._v("to estimate at the time of the given height")])])])]),t._v(" "),a("h3",{attrs:{id:"response-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-6","aria-hidden":"true"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("solutions per second, estimated")])])])]),t._v(" "),a("h3",{attrs:{id:"examples-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-6","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("command:\n\nkomodo-cli getnetworksolps\n\nresponse:\n\n9954190\n")])])]),a("blockquote",[a("p",[t._v("You can find your rpcuser, rpcpassword, and rpcport in the coin's .conf file.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('command:\n\ncurl --user myrpcuser:myrpcpassword --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getnetworksolps", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:myrpcport/\n\nresponse:\n')])])]),a("h2",{attrs:{id:"prioritisetransaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prioritisetransaction","aria-hidden":"true"}},[t._v("#")]),t._v(" prioritisetransaction")]),t._v(" "),a("p",[a("strong",[t._v('prioritisetransaction "transaction_id" priority_delta fee_delta')])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("prioritisetransaction")]),t._v(" method instructs the daemon to accept the indicated transaction into mined blocks at a higher (or lower) priority. The transaction selection algorithm considers the transaction as it would have a higher priority.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("This method is inherited from the original Bitcoin protocol, of which KMD is a fork (via Zcash). For more examples regarding this method, please see "),a("a",{attrs:{href:"https://bitcoincore.org/en/doc/0.16.1/rpc/mining/prioritisetransaction/"}},[t._v("the linked documentation")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"arguments-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-7","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"transaction_id"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("the transaction id")])]),t._v(" "),a("tr",[a("td",[t._v("priority")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("fee")]),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"response-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-7","aria-hidden":"true"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("true")]),t._v(" "),a("td",[t._v("(boolean)")]),t._v(" "),a("td",[t._v("returns true")])])])]),t._v(" "),a("h3",{attrs:{id:"examples-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-7","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('command:\n\nkomodo-cli prioritisetransaction "7dc902b280da27cf2dabe41ed6f4d04c828714f289435db193a49341005607eb" 0.0 10000\n\nresult:\n\ntrue\n')])])]),a("blockquote",[a("p",[t._v("You can find your rpcuser, rpcpassword, and rpcport in the coin's .conf file.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('command:\n\ncurl --user myrpcuser:myrpcpassword --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "prioritisetransaction", "params": ["txid", 0.0, 10000] }\' -H \'content-type: text/plain;\' http://127.0.0.1:myrpcport/\n\nresult:\n\n{\n  "result": true,\n  "error": null,\n  "id": "curltest"\n}\n')])])]),a("h2",{attrs:{id:"submitblock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submitblock","aria-hidden":"true"}},[t._v("#")]),t._v(" submitblock")]),t._v(" "),a("p",[a("strong",[t._v('submitblock "hexdata" ( "jsonparametersobject" )')])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("submitblock")]),t._v(" method instructs the daemon to propose a new block to the network.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The "),a("b",[t._v("jsonparametersobject")]),t._v(" parameter is currently ignored. See "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0022.mediawiki"}},[t._v("the linked documentation")]),t._v(" for full specification details.")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Note: for more information on "),a("b",[t._v("submitblock")]),t._v(" parameters and results, see "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0022.mediawiki#block-submission"}},[t._v("the linked documentation")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"arguments-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-8","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"hexdata"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("the hex-encoded block data to submit")])]),t._v(" "),a("tr",[a("td",[t._v('"jsonparametersobject"')]),t._v(" "),a("td",[t._v("(string, optional)")]),t._v(" "),a("td",[t._v("object of optional parameters")])]),t._v(" "),a("tr",[a("td",[t._v("{")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v('"workid"')]),t._v(" "),a("td",[t._v("(string, sometimes optional)")]),t._v(" "),a("td",[t._v("if the server provides a workid, it MUST be included with submissions")])]),t._v(" "),a("tr",[a("td",[t._v("}")]),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"response-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-8","aria-hidden":"true"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"duplicate"')]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("node already has valid copy of block")])]),t._v(" "),a("tr",[a("td",[t._v('"duplicate-invalid"')]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("node already has block, but it is invalid")])]),t._v(" "),a("tr",[a("td",[t._v('"duplicate-inconclusive"')]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("node already has block but has not validated it")])]),t._v(" "),a("tr",[a("td",[t._v('"inconclusive"')]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("node has not validated the block, it may not be on the node's current best chain")])]),t._v(" "),a("tr",[a("td",[t._v('"rejected"')]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("block was rejected as invalid")])])])]),t._v(" "),a("h3",{attrs:{id:"examples-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-8","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('command:\n\nkomodo-cli submitblock "mydata"\n\nresponse:\n\n')])])]),a("blockquote",[a("p",[t._v("You can find your rpcuser, rpcpassword, and rpcport in the coin's .conf file.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('command:\n\ncurl --user myrpcuser:myrpcpassword --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "submitblock", "params": ["mydata"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:myrpcport/\n\nresponse:\n')])])])])}],!1,null,null,null);r.options.__file="_323-mining.md";e.default=r.exports}}]);