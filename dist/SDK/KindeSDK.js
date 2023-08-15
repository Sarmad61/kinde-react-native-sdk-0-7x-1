var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _jwtDecode=_interopRequireDefault(require("jwt-decode"));var _urlParse=_interopRequireDefault(require("url-parse"));var _unauthenticated=require("../common/exceptions/unauthenticated.exception");var _unexpected=require("../common/exceptions/unexpected.exception");var _Enums=require("./Enums");var _AuthorizationCode=_interopRequireDefault(require("./OAuth/AuthorizationCode"));var _Storage=_interopRequireDefault(require("./Storage"));var _Utils=require("./Utils");var runtime=_interopRequireWildcard(require("../ApiClient"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var KindeSDK=function(_runtime$BaseAPI){(0,_inherits2["default"])(KindeSDK,_runtime$BaseAPI);var _super=_createSuper(KindeSDK);function KindeSDK(issuer,redirectUri,clientId,logoutRedirectUri){var _this;var scope=arguments.length>4&&arguments[4]!==undefined?arguments[4]:'openid profile email offline';var additionalParameters=arguments.length>5&&arguments[5]!==undefined?arguments[5]:{};(0,_classCallCheck2["default"])(this,KindeSDK);var configuration=new runtime.Configuration({basePath:issuer});_this=_super.call(this,configuration);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"issuer",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"redirectUri",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"clientId",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"logoutRedirectUri",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"scope",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"clientSecret",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"additionalParameters",void 0);_this.issuer=issuer;(0,_Utils.checkNotNull)(_this.issuer,'Issuer');_this.redirectUri=redirectUri;(0,_Utils.checkNotNull)(_this.redirectUri,'Redirect URI');_this.clientId=clientId;(0,_Utils.checkNotNull)(_this.clientId,'Client Id');_this.logoutRedirectUri=logoutRedirectUri;(0,_Utils.checkNotNull)(_this.logoutRedirectUri,'Logout Redirect URI');_this.additionalParameters=(0,_Utils.checkAdditionalParameters)(additionalParameters);_this.scope=scope;return _this;}(0,_createClass2["default"])(KindeSDK,[{key:"login",value:function(){var _login=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(){var additionalParameters,auth,additionalParametersMerged,_args=arguments;return _regenerator["default"].wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:additionalParameters=_args.length>0&&_args[0]!==undefined?_args[0]:{};(0,_Utils.checkAdditionalParameters)(additionalParameters);_context.next=4;return this.cleanUp();case 4:auth=new _AuthorizationCode["default"]();additionalParametersMerged=Object.assign({},this.additionalParameters,additionalParameters);return _context.abrupt("return",auth.authenticate(this,true,'login',additionalParametersMerged));case 7:case"end":return _context.stop();}},_callee,this);}));function login(){return _login.apply(this,arguments);}return login;}()},{key:"register",value:function register(){var additionalParameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_Utils.checkAdditionalParameters)(additionalParameters);var auth=new _AuthorizationCode["default"]();return auth.authenticate(this,true,'registration',additionalParameters);}},{key:"createOrg",value:function createOrg(){var additionalParameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return this.register(Object.assign({is_create_org:true},additionalParameters));}},{key:"logout",value:function(){var _logout=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(){var isRevoke,payload,URLParsed,response,_args2=arguments;return _regenerator["default"].wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:isRevoke=_args2.length>0&&_args2[0]!==undefined?_args2[0]:false;_context2.next=3;return this.cleanUp();case 3:if(!isRevoke){_context2.next=15;break;}payload=new _AuthorizationCode["default"]().buildBaseAuthenticateURL(this);_context2.prev=5;_context2.next=8;return this.request({path:"/oauth2/revoke",method:'POST',headers:{},body:(0,_Utils.convertObject2FormData)(payload)});case 8:return _context2.abrupt("return",true);case 11:_context2.prev=11;_context2.t0=_context2["catch"](5);console.error(_context2.t0.message);return _context2.abrupt("return",false);case 15:URLParsed=(0,_urlParse["default"])(this.logoutEndpoint,true);URLParsed.query['redirect']=this.logoutRedirectUri;_context2.next=19;return(0,_Utils.openWebBrowser)(URLParsed.toString(),this.redirectUri);case 19:response=_context2.sent;return _context2.abrupt("return",response.type==='success');case 21:case"end":return _context2.stop();}},_callee2,this,[[5,11]]);}));function logout(){return _logout.apply(this,arguments);}return logout;}()},{key:"getToken",value:function(){var _getToken=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(url){var token,URLParsed,_URLParsed$query,code,error,error_description,msg,formData,state,codeVerifier;return _regenerator["default"].wrap(function _callee3$(_context3){while(1)switch(_context3.prev=_context3.next){case 0:_context3.prev=0;_context3.next=3;return this.isAuthenticated;case 3:if(!_context3.sent){_context3.next=8;break;}_context3.next=6;return _Storage["default"].getToken();case 6:token=_context3.sent;return _context3.abrupt("return",token);case 8:_context3.next=12;break;case 10:_context3.prev=10;_context3.t0=_context3["catch"](0);case 12:(0,_Utils.checkNotNull)(url,'URL');URLParsed=(0,_urlParse["default"])(String(url),true);_URLParsed$query=URLParsed.query,code=_URLParsed$query.code,error=_URLParsed$query.error,error_description=_URLParsed$query.error_description;if(!error){_context3.next=18;break;}msg=error_description!==null&&error_description!==void 0?error_description:error;throw new _unauthenticated.UnAuthenticatedException(msg);case 18:(0,_Utils.checkNotNull)(code,'code');formData=new FormData();formData.append('code',code);formData.append('client_id',this.clientId);formData.append('grant_type','authorization_code');formData.append('redirect_uri',this.redirectUri);state=_Storage["default"].getState();if(state){formData.append('state',state);}codeVerifier=_Storage["default"].getCodeVerifier();if(codeVerifier){formData.append('code_verifier',codeVerifier);}return _context3.abrupt("return",this.fetchToken(formData));case 29:case"end":return _context3.stop();}},_callee3,this,[[0,10]]);}));function getToken(_x){return _getToken.apply(this,arguments);}return getToken;}()},{key:"useRefreshToken",value:function(){var _useRefreshToken=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(){var token,newToken,formData,_args4=arguments;return _regenerator["default"].wrap(function _callee4$(_context4){while(1)switch(_context4.prev=_context4.next){case 0:token=_args4.length>0&&_args4[0]!==undefined?_args4[0]:null;_context4.t0=token;if(_context4.t0){_context4.next=6;break;}_context4.next=5;return _Storage["default"].getToken();case 5:_context4.t0=_context4.sent;case 6:newToken=_context4.t0;if(newToken){_context4.next=9;break;}throw new _unauthenticated.UnAuthenticatedException();case 9:formData=new FormData();formData.append('client_id',this.clientId);formData.append('grant_type','refresh_token');formData.append('refresh_token',newToken===null||newToken===void 0?void 0:newToken.refresh_token);return _context4.abrupt("return",this.fetchToken(formData));case 14:case"end":return _context4.stop();}},_callee4,this);}));function useRefreshToken(){return _useRefreshToken.apply(this,arguments);}return useRefreshToken;}()},{key:"fetchToken",value:function fetchToken(formData){var _this2=this;return new Promise(function(){var _ref=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5(resolve,reject){var response,dataResponse;return _regenerator["default"].wrap(function _callee5$(_context5){while(1)switch(_context5.prev=_context5.next){case 0:_context5.next=2;return fetch(_this2.tokenEndpoint,{method:'POST',headers:{'Content-Type':'multipart/form-data'},body:formData});case 2:response=_context5.sent;_context5.next=5;return response.json();case 5:dataResponse=_context5.sent;if(!dataResponse.error){_context5.next=9;break;}reject(dataResponse);return _context5.abrupt("return");case 9:_context5.next=11;return _Storage["default"].setToken(dataResponse);case 11:resolve(dataResponse);case 12:case"end":return _context5.stop();}},_callee5);}));return function(_x2,_x3){return _ref.apply(this,arguments);};}());}},{key:"cleanUp",value:function(){var _cleanUp=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6(){return _regenerator["default"].wrap(function _callee6$(_context6){while(1)switch(_context6.prev=_context6.next){case 0:return _context6.abrupt("return",_Storage["default"].clearAll());case 1:case"end":return _context6.stop();}},_callee6);}));function cleanUp(){return _cleanUp.apply(this,arguments);}return cleanUp;}()},{key:"getUserDetails",value:function(){var _getUserDetails=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7(){return _regenerator["default"].wrap(function _callee7$(_context7){while(1)switch(_context7.prev=_context7.next){case 0:return _context7.abrupt("return",_Storage["default"].getUserProfile());case 1:case"end":return _context7.stop();}},_callee7);}));function getUserDetails(){return _getUserDetails.apply(this,arguments);}return getUserDetails;}()},{key:"getClaims",value:function(){var _getClaims=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee8(){var tokenType,token,_args8=arguments;return _regenerator["default"].wrap(function _callee8$(_context8){while(1)switch(_context8.prev=_context8.next){case 0:tokenType=_args8.length>0&&_args8[0]!==undefined?_args8[0]:_Enums.TokenType.ACCESS_TOKEN;if([_Enums.TokenType.ACCESS_TOKEN,_Enums.TokenType.ID_TOKEN].includes(tokenType)){_context8.next=3;break;}throw new _unexpected.UnexpectedException('tokenType');case 3:_context8.next=5;return _Storage["default"].getTokenType(tokenType);case 5:token=_context8.sent;if(token){_context8.next=8;break;}throw new _unauthenticated.UnAuthenticatedException();case 8:return _context8.abrupt("return",(0,_jwtDecode["default"])(token));case 9:case"end":return _context8.stop();}},_callee8);}));function getClaims(){return _getClaims.apply(this,arguments);}return getClaims;}()},{key:"getClaim",value:function(){var _getClaim=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee9(keyName){var tokenType,claims,_args9=arguments;return _regenerator["default"].wrap(function _callee9$(_context9){while(1)switch(_context9.prev=_context9.next){case 0:tokenType=_args9.length>1&&_args9[1]!==undefined?_args9[1]:_Enums.TokenType.ACCESS_TOKEN;_context9.next=3;return this.getClaims(tokenType);case 3:claims=_context9.sent;return _context9.abrupt("return",claims[keyName]);case 5:case"end":return _context9.stop();}},_callee9,this);}));function getClaim(_x4){return _getClaim.apply(this,arguments);}return getClaim;}()},{key:"getPermissions",value:function(){var _getPermissions=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee10(){var claims;return _regenerator["default"].wrap(function _callee10$(_context10){while(1)switch(_context10.prev=_context10.next){case 0:_context10.next=2;return this.getClaims();case 2:claims=_context10.sent;return _context10.abrupt("return",{orgCode:claims['org_code'],permissions:claims['permissions']});case 4:case"end":return _context10.stop();}},_callee10,this);}));function getPermissions(){return _getPermissions.apply(this,arguments);}return getPermissions;}()},{key:"getPermission",value:function(){var _getPermission=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee11(permission){var allClaims,permissions;return _regenerator["default"].wrap(function _callee11$(_context11){while(1)switch(_context11.prev=_context11.next){case 0:_context11.next=2;return this.getClaims();case 2:allClaims=_context11.sent;permissions=allClaims['permissions'];return _context11.abrupt("return",{orgCode:allClaims['org_code'],isGranted:permissions===null||permissions===void 0?void 0:permissions.includes(permission)});case 5:case"end":return _context11.stop();}},_callee11,this);}));function getPermission(_x5){return _getPermission.apply(this,arguments);}return getPermission;}()},{key:"getOrganization",value:function(){var _getOrganization=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee12(){var orgCode;return _regenerator["default"].wrap(function _callee12$(_context12){while(1)switch(_context12.prev=_context12.next){case 0:_context12.next=2;return this.getClaim('org_code');case 2:orgCode=_context12.sent;return _context12.abrupt("return",{orgCode:orgCode});case 4:case"end":return _context12.stop();}},_callee12,this);}));function getOrganization(){return _getOrganization.apply(this,arguments);}return getOrganization;}()},{key:"getUserOrganizations",value:function(){var _getUserOrganizations=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee13(){var orgCodes;return _regenerator["default"].wrap(function _callee13$(_context13){while(1)switch(_context13.prev=_context13.next){case 0:_context13.next=2;return this.getClaim('org_codes',_Enums.TokenType.ID_TOKEN);case 2:orgCodes=_context13.sent;return _context13.abrupt("return",{orgCodes:orgCodes});case 4:case"end":return _context13.stop();}},_callee13,this);}));function getUserOrganizations(){return _getUserOrganizations.apply(this,arguments);}return getUserOrganizations;}()},{key:"isAuthenticated",get:function get(){var _this3=this;return(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee14(){var timeExpired,now,isAuthenticated,token;return _regenerator["default"].wrap(function _callee14$(_context14){while(1)switch(_context14.prev=_context14.next){case 0:_context14.next=2;return _Storage["default"].getExpiredAt();case 2:timeExpired=_context14.sent;now=new Date().getTime();isAuthenticated=timeExpired*1000>now;if(!isAuthenticated){_context14.next=7;break;}return _context14.abrupt("return",true);case 7:_context14.prev=7;_context14.next=10;return _this3.useRefreshToken();case 10:token=_context14.sent;return _context14.abrupt("return",((token===null||token===void 0?void 0:token.expires_in)||0)>0);case 14:_context14.prev=14;_context14.t0=_context14["catch"](7);return _context14.abrupt("return",false);case 17:case"end":return _context14.stop();}},_callee14,null,[[7,14]]);}))();}},{key:"authorizationEndpoint",get:function get(){return this.issuer+"/oauth2/auth";}},{key:"tokenEndpoint",get:function get(){return this.issuer+"/oauth2/token";}},{key:"revokeEndpoint",get:function get(){return this.issuer+"/oauth2/revoke";}},{key:"logoutEndpoint",get:function get(){return this.issuer+"/logout";}}]);return KindeSDK;}(runtime.BaseAPI);var _default=KindeSDK;exports["default"]=_default;