var app = angular.module('myApp', ['pascalprecht.translate']);

app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.preferredLanguage('en'); 
  
  $translateProvider.translations('en', {
    'TITLE': 'Carraroe House Bed & Breakfast',
    'home.p1':'Fáilte go dtí Teach na Ceathrun Rua, Carraroe House is a comfortable two storey family run bed and breakfast, located in the village of Carraroe. Carraroe (An Cheathru Rua) is situated in the heart of the Conemara Gaeltacht on a peninsula 50 kilometers west of Galway City. <p></p>Your hostess Mary will give you any help you may need to make your stay enjoyable. All rooms are ensuite and have free WiFi internet access. The B&B accommodation is Fáilte Ireland approved.<p></p>Certificate of Merit from Fáilte Ireland 2005 and 2006. There are several pubs in Carraroe village where music sessions are held regularly.  <br><br>',
    'home.p1a.title': '<h5>Directions</h5>',  
    'home.p1a': 'Carraroe (An Cheathrú Rua) is situated on a peninsula 50 kms. west of Galway city on the coast road ( R336).  From Galway city take the Coast Road (R336) to Casla, continue onto R343 to Carraroe by the coast. The house is at the end of village on right side.', 
    'home.p2.title':'Accommodation Room Rates',
    'home.p2':'Room rates are€ &#128;38 - &#128;45 per person.',
    'home.p3.title':'Contact Details', 
    'home.p3':'<P><i class="fa fa-phone"></i>&nbsp;&nbsp;+353 (0)91 595188 <br><i class="fa fa-envelope"></i>&nbsp;&nbsp;carraroehouse@gmail.com <br>                    <i class="fa fa-globe"></i>&nbsp;&nbsp;GPS Location: 53.260694 N, 9.6070647 W<br><i class="fa fa-wifi"></i>&nbsp;&nbsp;WiFi Available <br>',
  	'home.titleli':'Local Information',
    'localinfo.p1':'Carraroe (An Cheathrú Rua) is situated on a peninsula 50 kms. west of Galway city on the coast road ( R336). Carraroe is in the Connemara Gaeltacht and Irish (Gaelic) is the first language. <p>  It is 8 kms from Rossaveal (Ros a Mhíl) the ferry port for the Aran Islands so therefore it&#40;s an ideal base for visiting the islands or touring Connemara. <p> There are several small safe beaches locally, the most interesting is the Coral beach (Trá an Dóilín) which is made up of twig like fragments of lithothamnium and other seaweeds that have stiffened. It&#40;s also a very popular diving location.<p>There are many interesting walks you can take in the area and as Carraroe is a peninsula it&#40;s possible to take many loops around the peninsula. The beach also has a blue flag from E.U.. <p>  The traditional sailing boats - the Hooker, Gleoiteog and Pucan are still to be seen sailing in the bay and there are several regattas held during the summer. One of the largest festivals - Féile an Dóilín is held in Carraroe over the first weekend in August. In olden times the larger  boats were used to transport turf from the peat bogs of Connemara to the Aran Islands and Co. Clare. <p> As Irish is the main language in the area there are several courses held during the summer for second level students in the 2 Irish colleges. Students live with Irish speaking families during their 3 week stay at the courses. An tAcadamh - is part of the Irish Department of National University of Ireland Galway. Courses are held there for adults, third level students and foreigners. </p>',
    'home.titleplaces':'Places of Interest',
    'places.p1':'<b>Aran Islands</b> : There are several sailings daily from Rossaveal.There are many monastic ruins on island also Dun Aengus fort which is situated on the edge of a 300 feet high cliff. <p><br> <b>Connemara Isles Golf Course</b> : 9 hole golf course in scenic surroundings with some of the holes on an island. <p> <b>Lough Corrib</b> : World famous for trout and salmon fishing. <p> <b>Rosmuc</b> : Holiday home of Patrick Pearse executed after 1916 Rising. Most of his short stories in Irish are set in this area. <p> <b>Kylemore Abbey</b> : Restored Victorian Gardens and Craft Centre. <p> <b>Connemara National Park</b> : Exhibition on the Connemara landscape, Audio Visual show and nature trails. <p> <b>Spiddal</b> : Craft village and Standun Gift Shop with large supply of Aran sweaters, Crystal and giftware.',
    'home.titlerates':'Rooms and Rates',
    'rate.p1':'<p><B>Breakfast</b> <br> Traditional Irish breakfast with home made brown bread and scones.<br>Selection of cereals and porridge.<br>The healthy option consists of fruit, fruit salad, yoghurt and cheese.<p><b>Bedrooms</b><br>4 en-suite rooms.<br> Television. <br> Tea and coffee making facilities.<br>Hairdryer.<br>Radio alarm clock. <p> <b>Rates</b> <br>Room rates are &#128;38 - &#128;45 per person<br><i>33% reduction for children under 12 sharing with parents</i>br>&nbsp;<br>&nbsp;<br>',
    'label.names':'Name',
	'label.checkin':'Check-In Date',
	'label.checkout':'Check-Out Date',
	'label.email':'Email Address',
	'label.guestNumber':'Number of People',
	'label.roomNumber':'Rooms Required',
	'label.phone':'Phone Number',
	'label.comment':'Additional Comments',
	'label.booking':'Make Booking Request',
	'label.clear':'Clear Form',
	'lang.eng':'English',
	'lang.ga':'Irish',
	'notEmpty':'This field cannot be empty',
  	 });
 
  $translateProvider.translations('ga', {
    'TITLE': 'Carraroe House Bed & Breakfast',
    'home.p1':'Fáilte go dtí Teach an Ceathrún Rua. Teach lóistín teaghlaigh dhá stór atá an-chompordach agus atá suite i mbaile na Ceathrún Rua is ea Teach na Ceathrún Rua. Baile beag atá suite i gcroílár Ghaeltacht Conamara is ea An Cheathrú Rua atá tuairim is 50 ciliméadar siar ó chathair na Gaillimhe. <p></p> Tabharfaidh Máire, bean an tí, an-aire díobh agus déanfaidh sí cinnte go mbainfidh sibh an-sásamh as an am a chaithfidh sibh linn. Is seomraí en suite iad na seomraí go léir agus tá Wi-FI saor in aisce ar fáil iontu. Tá deimhniú bronnta ag Fáilte Ireland ar an teach lóistín. Bhronn Fáilte Ireland teastas fiúntais ar an teach lóistín chomh maith sa bhliain 2005 agus 2006. <p></p>Tá roinnt tithe tábhairne i sráidbhaile na Ceathrún Rua agus bíonn seisiúin cheoil ar siúl iontu go minic.',
     'home.p1a.title': '<h5>Treoracha</h5>', 
    'home.p1a': 'Tá An Cheathrú Rua suite ar leithinis atá 50 ciliméadar siar ó chathair na Gaillimhe ar bhóthar an chósta (R336). Is tú ag fágáil chathair na Gaillimhe tóg Bóthar an Chósta (R336) chomh fada le Casla. Ansin lean ar aghaidh ar an R343 go dtí An Cheathrú Rua. Coinnigh ort tríd an mbaile agus tá an teach lóistín ar thaobh na láimhe deise.', 
    'home.p2.title':'Rátaí na Seomraí Lóistín',
    'home.p2':'Is idir &#128; 38 agus &#128; 45 ráta an tseomra in aghaidh an duine.', 
    'home.p3.title':'Sonraí Teagmhála', 
    'home.p3':'<P><i class="fa fa-phone"></i>&nbsp;&nbsp;+353 (0)91 595188 <br><i class="fa fa-envelope"></i>&nbsp;&nbsp;carraroehouse@gmail.com <br>                    <i class="fa fa-globe"></i>&nbsp;&nbsp;GPS Location: 53.260694 N, 9.6070647 W<br><i class="fa fa-wifi"></i>&nbsp;&nbsp;WiFi ar fáil <br>',
  	'home.titleli':'Eolas Áitiúil',
    'localinfo.p1':'Tá an Cheathrú Rua suite ar leithinis atá 50 ciliméadar siar ó chathair na Gaillimhe ar bhóthar an chósta (R336). Tá an Cheathrú Rua i nGaeltacht Chonamara agus is í an Ghaeilge (Gaelic) teanga dhúchais na ndaoine.<p></p> Baile í atá 8 km ó Ros a Mhíl, an calafort farantóireachta a dhéanann freastal ar Oileáin Árann agus dá bharr sin tá an baile an-áisiúil chun cuairt a thabhairt ar na hoileáin nó chun camchuairt a thabhairt thart ar Chonamara.<p></p> Tá roinnt mhaith tránna beaga atá sábháilte sa gceantar agus is é Trá an Dóilín an trá is clúití. Is déanta de phíosaí beaga coiréil agus feamainne atá faighte crua thar na blianta atá an gaineamh. Tá an-cháil ar an trá mar shuíomh tumadóireachta agus bronnadh an Brat Gorm ón EU ar an trá chomh maith. Tá neart siúlóidí an-suimiúil ar fud an bhaile agus ó tharla gur leithinis í An Cheathrú Rua is iomaí cosán is féidir teacht orthu agus tú ag spaisteoireacht thart. <p> </p>Bíonn na báid thraidisiúnta - gleoiteoga, púcáin agus húicéirí - le feiceáil thart fán gcósta go háirithe nuair a bhíonn comórtais seoltóireachta ar siúl. Féile mhór sa gceantar is ea Féile an Dóilín a bhíonn ar siúl sa gcéad seachtain de mhí Lúnasa. Siar sna blianta bhainfí úsáid as na báid mhóra chun móin a tharraingt isteach go hÁrainn agus ó dheas go contae an Chláir.<p> </p>Is í an Ghaeilge teanga dhúchais an cheantair agus bíonn cúrsaí Gaeilge ar siúl i rith an tsamhraidh sna coláistí samhraidh Gaeilge. Tarraingíonn na cúrsaí Gaeilge seo na sluaite daltaí dara leibhéal isteach sa gceantar chun feabhas a chur ar a gcuid Gaeilge. Bíonn na daltaí seo in aontíos le teaghlaigh na háite chun go dtabharfaidh siad leo blas Ghaeilge an cheantair. Cuirtear cúrsaí Gaeilge ar fáil san Acadamh chomh maith. Is cuid de Roinn na Gaeilge in Ollscoil na hÉireann, Gaillimh é an tAcadamh. Is dírithe ar dhaoine fásta agus ar mhic léinn tríú leibhéal a bhíonn na cúrsaí sin.',
    'home.titleplaces':'Áiteanna Spéisiúla',
	'places.p1':'<b>Oileáin Árann</b> : Fágann bád farantóireachta cuan Ros a Mhíl chuile lá. Tá neart le feiceáil ar na hoileáin, go háirithe fothracha mainistreacha, tránna breátha agus dúnta. Is é Dún Aengus an dún is cáiliúla agus tá sé lonnaithe le taobh aille atá 300 troithe ar airde. <p><br> <b>Oileáin Chonamara Cúrsa Gailf</b> : Tá cúrsa gailf ina bhfuil 9 bpoll suite cúpla míle siar ón gCeathrú Rua. <p> <b>An Choirib</b> :  Bíonn iascairí ag tarraingt ar an loch cáiliúil seo chun bheith ag iascach le haghaidh breac agus bradán. <p> <b>Ros Muc</b> : Bhí teach saoire ag Pádraig Mac Piarais i Ros Muc agus bíonn sé oscailte don phobal. Cuireadh Pádraig Mac Piarais chun báis mar gheall ar an bpáirt lárnach a bhí aige in Éirí Amach na Cásca nó Éirí Amach 1916, mar a thugtar uirthi. Scríobh sé neart gearrscéalta faoin gceantar agus faoin am a bhí caite aige ann. <p> <b>Mainistir na Coille Móire</b> : Gairdíní Victeoiriacha athchóirithe agus Ionad Ceardaíochta. <p> <b>Páirc Náisiúnta Chonamara</b> : Taispeántas ar thírdhreach Chonamara agus slite fiadhúlra. <p> <b>An Spidéal</b> : Tá ionad ceardaíochta sa mbaile agus siopa éadaí Tigh Standún. Is féidir neart geansaithe Árann, criostal and bronntanais a cheannacht anseo.',
    'home.titlerates':'Seomraí agus Rátaí',
    'rate.p1':'<B>Bricfeasta</b> <br>Tá bricfeasta traidisiúnta ar fáil chomh maith le cácaí agus scónaí baile.<br>Tá gránach bricfeasta agus leite ar fáil chomh maith le roghanna sláintiúla - torthaí, sailéad, iógart agus cáis.<p><b>Seomraí</b><br>Tá ceithre sheomra en-suite sa teach lóistín.<br>Teilifís. <br> Áiseanna déanta tae agus caife.<br>Triomadóir gruaige, raidió le clog aláraim. <br>Raidió clog aláraim.  <p> <b>Rátaí</b> <br>Is idir &#128;38 agus &#128;45 ráta an tseomra in aghaidh an duine<br><i>Bíonn lascaine 33% ar fáil do leanaí faoi 12 bhliain a bhíonn ag fanacht sa seomra céanna leis na tuismitheoirí.</i><br>&nbsp;<br>&nbsp;<br>', 
    'label.names':'Ainm',
	'label.checkin':'Dáta Tagtha',
	'label.checkout':'Dáta Imithe',
	'label.email':'R-phost',
	'label.guestNumber':'Líon Daoine',
	'label.roomNumber':'Líon na seomraí a bheidh ag teastáil',
	'label.phone':'Fón',
	'label.comment':'Eolas breise eile',
	'label.booking':'Déan Iarratais',
	'label.clear':'Glan an Foirm',
	'lang.eng':'Béarla',
	'lang.ga':'Gaeilge',
	'notEmpty':'Ní féidir leis seo a bheith folamh',
   }); 
}]);



app.controller('TranslateController', function($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
});

