(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-notice-notice_detail"],{"01ac":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return o}));var o={uniIcons:e("6a70").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"notice-detail-box"},[e("v-uni-view",{staticClass:"common-box"},[e("v-uni-view",{staticClass:"status-bar-wx",style:{"--statusbarheight":t.statusBarHeight}}),e("v-uni-view",{staticClass:"status-bar-wx-fake",style:{"--statusbarheight":t.statusBarHeight}}),e("v-uni-view",{staticClass:"top-nav",style:{"--statusbarheight":t.statusBarHeight}},[e("v-uni-view",{staticClass:"top-nav-back"},[e("uni-icons",{staticClass:"top-nav-back-icon",attrs:{type:"back",size:"24",color:"#242424"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goBack.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"top-nav-title"},[t._v(t._s(t.$t("notice_detail.title")))]),e("v-uni-view",{staticClass:"top-nav-btn"})],1),e("v-uni-view",{staticClass:"top-nav-fake"}),e("v-uni-view",{staticClass:"page-bg",style:{"--clientheight":t.clientHeight}})],1)],1)},r=[]},"2d99":function(t,a,e){"use strict";var o=e("ce9a"),i=e.n(o);i.a},"74ce":function(t,a,e){"use strict";e("7a82");var o=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=o(e("6a70")),r={components:{uniIcons:i.default},onShow:function(){this.clientHeight=uni.getWindowInfo().windowHeight+"px",this.statusBarHeight=uni.getWindowInfo().statusBarHeight+"px",this.showTestToast(1)},onLoad:function(t){this.fromType=t.fromType},data:function(){return{clientHeight:"auto",statusBarHeight:0,fromType:"1"}},methods:{goBack:function(){var t=this.fromType;uni.redirectTo({url:"/pages/notice/notice_index?fromType=".concat(t)})}}};a.default=r},a5f0:function(t,a,e){"use strict";e.r(a);var o=e("01ac"),i=e("ac71");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("2d99");var n=e("f0c5"),c=Object(n["a"])(i["default"],o["b"],o["c"],!1,null,"6e78ca1a",null,!1,o["a"],void 0);a["default"]=c.exports},ac71:function(t,a,e){"use strict";e.r(a);var o=e("74ce"),i=e.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(r);a["default"]=i.a},c75f:function(t,a,e){var o=e("24fb");a=o(!1),a.push([t.i,".flex-box[data-v-6e78ca1a]{display:flex;flex-direction:column;align-items:center;justify-content:center}.text-ellipsis[data-v-6e78ca1a]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.text-ellipsis-two[data-v-6e78ca1a]{text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.status_bar[data-v-6e78ca1a]{height:0;width:100%;z-index:10}.top-nav[data-v-6e78ca1a]{width:100%;height:%?88?%;position:fixed;top:0;background-color:#fff;display:flex;justify-content:space-between;align-items:center;z-index:10}.top-nav .top-nav-back[data-v-6e78ca1a]{width:25%}.top-nav .top-nav-back .top-nav-back-icon[data-v-6e78ca1a]{padding:%?15?% %?15?% %?15?% %?30?%}.top-nav .top-nav-title[data-v-6e78ca1a]{width:45%;text-align:center;font-size:%?34?%;color:#000}.top-nav .top-nav-btn[data-v-6e78ca1a]{width:calc(25% - %?30?%);text-align:right;margin-right:%?30?%;font-size:%?28?%;color:#838383;position:relative;top:%?3?%}.top-nav-fake[data-v-6e78ca1a]{width:100%;height:%?88?%}.top-nav-search[data-v-6e78ca1a]{width:100%;height:%?80?%;background-color:#fff;position:fixed;top:%?88?%;z-index:10}.top-nav-search .nav-search-box[data-v-6e78ca1a]{width:calc(100% - %?30?% * 2);height:%?72?%;background-color:#f8f8f8;margin:calc(%?80?% - %?72?%) auto 0 auto;border-radius:%?50?%;display:flex;justify-content:space-between;align-items:center}.top-nav-search .nav-search-box .nav-search-icon[data-v-6e78ca1a]{position:relative;left:%?26?%;top:%?-2?%}.top-nav-search .nav-search-box .nav-search-input[data-v-6e78ca1a]{width:calc(100% - %?80?%);height:100%;font-size:%?24?%}.top-nav-search .nav-search-box .nav-input-placeholder[data-v-6e78ca1a]{font-size:%?28?%;color:#c8c8c8}.nav-search-box-invoice[data-v-6e78ca1a]{width:calc(100% - %?30?% * 2);margin:0 auto;display:flex;justify-content:space-between;align-items:center}.nav-search-box-invoice .nav-search-box[data-v-6e78ca1a]{width:calc(100% - %?140?%)}.nav-search-box-invoice .nav-search-filter[data-v-6e78ca1a]{width:%?140?%;font-size:%?28?%;color:#313131;display:flex;justify-content:flex-end;align-items:center;position:relative;top:%?10?%}.nav-search-box-invoice .nav-search-filter .nav-search-filter-text[data-v-6e78ca1a]{margin-right:%?8?%}.nav-search-box-invoice .nav-search-filter .nav-search-filter-icon[data-v-6e78ca1a]{margin-right:%?20?%;position:relative;top:%?1?%}.top-nav-tab[data-v-6e78ca1a]{width:100%;height:%?100?%;background-color:#fff;position:fixed;top:calc(%?88?% + %?80?%);z-index:10}.top-nav-tab .nav-tab-box[data-v-6e78ca1a]{margin:0 auto}.top-nav-tab .nav-tab-box-two[data-v-6e78ca1a]{width:75%}.top-nav-tab .nav-tab-box-four[data-v-6e78ca1a]{width:100%}.top-nav-tab .nav-tab-box-three[data-v-6e78ca1a]{width:100%}.top-nav-fake-high[data-v-6e78ca1a]{width:100%;height:calc(%?88?% + %?80?% + %?100?%)}.top-nav-fake-middle[data-v-6e78ca1a]{width:100%;height:calc(%?88?% + %?80?%)}.bottom-menu[data-v-6e78ca1a]{width:100%;height:%?120?%;padding-top:%?10?%;background-color:#fff;position:fixed;bottom:0;z-index:10}.bottom-menu .bottom-menu-box[data-v-6e78ca1a]{width:60%;height:100%;margin:0 auto;display:flex;justify-content:space-between}.bottom-menu .bottom-menu-box .bottom-menu-item .bottom-menu-icon[data-v-6e78ca1a]{width:%?45?%;height:%?45?%;margin:%?16?% 0 %?8?% 0}.bottom-menu .bottom-menu-box .bottom-menu-item .bottom-menu-icon img[data-v-6e78ca1a]{width:100%;height:100%}.bottom-menu .bottom-menu-box .bottom-menu-item .bottom-menu-text[data-v-6e78ca1a]{font-size:%?20?%;color:#313131;text-align:center}.bottom-menu .bottom-menu-box .bottom-menu-logo[data-v-6e78ca1a]{width:%?90?%;height:%?90?%;position:relative;top:%?0?%;border-radius:50%;box-shadow:0 5px 20px 1px #b0b0b0}.bottom-menu .bottom-menu-box .bottom-menu-logo img[data-v-6e78ca1a]{width:100%;height:100%}.bottom-gap[data-v-6e78ca1a]{width:100%;height:calc(%?120?% + %?50?%)}.bottom-gap-offset[data-v-6e78ca1a]{height:calc(%?120?% - %?60?%)}.bottom-menu-address[data-v-6e78ca1a]{height:%?148?%}.bottom-menu-address .bottom-menu-btn[data-v-6e78ca1a]{width:calc(100% - %?30?% * 2);height:%?78?%;background:#5bc797;box-shadow:0 2px 10px 1px rgba(0,190,106,.42);border-radius:%?44?%;margin:%?30?% auto 0 auto;text-align:center;line-height:%?78?%}.bottom-menu-address .bottom-menu-btn .bottom-menu-btn-text[data-v-6e78ca1a]{color:#fff;font-size:%?28?%;margin-left:%?10?%;letter-spacing:%?4?%}.bottom-menu-address .bottom-menu-btn .bottom-menu-btn-text-save[data-v-6e78ca1a]{letter-spacing:%?10?%}.bottom-gap-address[data-v-6e78ca1a]{height:calc(%?148?% - %?30?%)}.bottom-gap-address-default[data-v-6e78ca1a]{height:calc(%?148?% - %?40?%)}.form-picker[data-v-6e78ca1a]{width:calc(100% - %?30?% * 2);height:%?120?%;border-bottom:%?1?% solid #e9e9e9;display:flex;justify-content:space-between;align-items:center;margin:0 auto}.form-picker .form-picker-title[data-v-6e78ca1a]{font-size:%?30?%;color:#303031}.form-picker .form-picker-choose[data-v-6e78ca1a]{display:flex;justify-content:flex-end;align-items:center;min-width:%?300?%}.form-picker .form-picker-choose .form-picker-text-placeholder[data-v-6e78ca1a]{font-size:%?28?%;color:#bfbfbf;margin-right:%?20?%}.form-picker .form-picker-choose .form-picker-text[data-v-6e78ca1a]{font-size:%?28?%;color:#000;margin-right:%?20?%}.form-picker .form-picker-choose .form-picker-date[data-v-6e78ca1a]{width:%?160?%;margin-right:%?15?%}.form-picker .form-picker-choose .form-picker-icon[data-v-6e78ca1a]{margin-right:%?15?%}.form-number[data-v-6e78ca1a]{width:calc(100% - %?30?% * 2);height:%?120?%;border-bottom:%?1?% solid #e9e9e9;display:flex;justify-content:space-between;align-items:center;margin:0 auto}.form-number .form-number-title[data-v-6e78ca1a]{font-size:%?30?%;color:#303031}.form-volume[data-v-6e78ca1a]{width:calc(100% - %?30?% * 2);margin:0 auto;padding-bottom:%?22?%}.form-volume .form-volume-top[data-v-6e78ca1a]{width:100%;height:%?120?%;display:flex;justify-content:space-between;align-items:center}.form-volume .form-volume-top .form-volume-title[data-v-6e78ca1a]{font-size:%?30?%;color:#303031}.form-volume .form-volume-top .form-volume-count[data-v-6e78ca1a]{width:%?140?%;height:26px;background-color:#f8f8f8;text-align:center;font-size:14px;color:#000;line-height:26px}.form-volume .form-volume-bottom[data-v-6e78ca1a]{width:100%;height:%?110?%;background-color:#f8f8f8;display:flex;justify-content:space-around;align-items:center}.form-volume .form-volume-bottom .form-volume-item[data-v-6e78ca1a]{height:%?60?%;display:flex;justify-content:space-between}.form-volume .form-volume-bottom .form-volume-item .form-volume-item-input[data-v-6e78ca1a]{width:%?110?%;height:100%;background:#fff;text-align:center}.form-volume .form-volume-bottom .form-volume-item .form-volume-item-text[data-v-6e78ca1a]{margin-left:%?10?%;font-size:%?30?%;color:#303031;line-height:%?60?%}.form-volume .form-volume-bottom .form-volume-item .form-volume-item-text .form-volume-item-icon[data-v-6e78ca1a]{margin-left:%?8?%}.form-must-have[data-v-6e78ca1a]{font-size:%?30?%;color:#ff5147;position:relative;top:%?2?%;margin-right:%?3?%}.common-form-item[data-v-6e78ca1a]{width:calc(100% - %?40?%);height:%?120?%;margin:0 auto;border-bottom:%?1?% solid #e9e9e9;display:flex;justify-content:space-between;align-items:center}.common-form-item .form-item-title[data-v-6e78ca1a]{width:40%;font-size:%?28?%;color:#000;padding-left:%?10?%;display:flex;justify-content:flex-start;align-items:center}.common-form-item .form-item-title .form-item-title-icon[data-v-6e78ca1a]{margin-left:%?12?%;position:relative;top:%?3?%}.common-form-item .form-item-title-long[data-v-6e78ca1a]{width:60%}.common-form-item .form-item-arrow[data-v-6e78ca1a]{height:100%;display:flex;justify-content:flex-end;align-items:center}.common-form-item .form-item-arrow .form-item-arrow-icon[data-v-6e78ca1a]{position:relative;top:%?1?%;margin-left:%?5?%}.common-form-item .form-item-arrow .form-item-common-icon[data-v-6e78ca1a]{top:0}.common-form-item .form-item-arrow .form-item-unit[data-v-6e78ca1a]{display:inline-block;width:%?42?%}.common-form-item .form-input-default[data-v-6e78ca1a]{width:calc(100% - %?10?% * 2);height:100%;font-size:%?30?%;color:#000;padding:0 %?10?%;text-align:right}.common-form-item .form-input-placeholder[data-v-6e78ca1a]{font-size:%?28?%;color:#888;text-align:right}.common-form-item .form-radio-default[data-v-6e78ca1a]{padding-right:%?10?%}.common-form-item .form-radio-default .form-radio-default-label[data-v-6e78ca1a]{margin-left:%?26?%;color:#4a4a4a;font-size:%?28?%}.form-switch-default[data-v-6e78ca1a]{-webkit-transform:scale(.8);transform:scale(.8)}.common-form-item[data-v-6e78ca1a]:last-child{border-bottom:%?1?% solid transparent}.common-form-item-big[data-v-6e78ca1a]{width:calc(100% - %?50?%);margin:0 auto}.common-form-item-big .common-form-item-big-title[data-v-6e78ca1a]{height:%?120?%;padding-left:%?5?%;font-size:%?28?%;color:#313131;line-height:%?120?%}.common-form-item-big .common-form-item-big-import[data-v-6e78ca1a]{width:calc(100% - %?10?%);height:%?227?%;margin:0 auto;padding-bottom:%?5?%;display:flex;justify-content:space-between}.common-form-item-big .common-form-item-big-import .common-form-item-big-import-box[data-v-6e78ca1a]{width:calc(50% - %?20?%);height:%?200?%;border-radius:%?20?%;border:%?1?% solid #e9e9e9;overflow:hidden;position:relative}.common-form-item-big .common-form-item-big-import .common-form-item-big-import-box .common-form-item-big-import-img[data-v-6e78ca1a]{width:%?72?%;height:%?72?%;display:block;margin:%?43?% auto 0 auto}.common-form-item-big .common-form-item-big-import .common-form-item-big-import-box .common-form-item-big-import-text[data-v-6e78ca1a]{display:block;margin:%?15?% auto 0 auto;text-align:center;font-size:%?28?%;color:#4a4a4a}.common-form-item-big .common-form-item-big-import .common-form-item-big-import-box .common-form-item-big-result-img[data-v-6e78ca1a]{width:100%;height:100%}.common-form-item-big .common-form-item-big-import .common-form-item-big-import-box .common-form-item-big-result-icon[data-v-6e78ca1a]{position:absolute;top:%?10?%;right:%?20?%}.common-form-item-big .common-form-item-big-textaera[data-v-6e78ca1a]{width:100%;height:%?240?%;margin:0 auto;padding-bottom:%?25?%}.common-form-item-big .common-form-item-big-textaera .form-textaera-must-have[data-v-6e78ca1a]{position:relative;top:%?4?%}.common-form-item-big .common-form-item-big-textaera .form-textarea-default[data-v-6e78ca1a]{width:calc(100% - %?20?% * 2);height:calc(100% - %?20?% * 2);border-radius:%?20?%;border:%?1?% solid #e9e9e9;padding:%?20?%;font-size:%?28?%}.common-form-item-note[data-v-6e78ca1a]{width:calc(100% - %?50?%);margin:0 auto}.common-form-item-note .common-form-item-note-title[data-v-6e78ca1a]{height:%?76?%;padding-left:%?5?%;font-size:%?30?%;color:#313131;line-height:%?76?%}.common-form-item-note .common-form-item-note-textaera[data-v-6e78ca1a]{width:100%;height:%?200?%;margin:0 auto;padding-bottom:%?26?%}.common-form-item-note .common-form-item-note-textaera .form-textarea-default[data-v-6e78ca1a]{width:calc(100% - %?20?% * 2);height:calc(100% - %?20?% * 2);border-radius:%?20?%;background-color:#f8f8f8;padding:%?20?%;font-size:%?28?%}.common-form-item-note .common-form-item-note-title-high[data-v-6e78ca1a]{height:%?100?%;line-height:%?110?%;font-size:%?28?%;color:#000;padding-left:%?5?%}.common-form-item-nosplit[data-v-6e78ca1a]{border-bottom:%?1?% solid transparent}.common-goods-box[data-v-6e78ca1a]{width:calc(100% - %?40?%);margin:0 auto;padding-bottom:%?40?%;border-bottom:%?1?% solid #e9e9e9}.common-goods-box .common-goods-item[data-v-6e78ca1a]{width:100%;min-height:%?130?%;display:flex;justify-content:space-between;align-items:center;margin-top:%?20?%}.common-goods-box .common-goods-item .common-goods-img[data-v-6e78ca1a]{width:%?128?%;height:%?128?%}.common-goods-box .common-goods-item .common-goods-img img[data-v-6e78ca1a]{width:100%;height:100%}.common-goods-box .common-goods-item .common-goods-content[data-v-6e78ca1a]{width:calc(100% - %?128?% - %?20?%)}.common-goods-box .common-goods-item .common-goods-content .common-goods-title[data-v-6e78ca1a]{font-size:%?26?%;color:#313131;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.common-goods-box .common-goods-item .common-goods-content .common-goods-number[data-v-6e78ca1a]{margin:%?20?% %?10?% 0 0;float:right}.common-goods-box .common-goods-item[data-v-6e78ca1a]:nth-child(1){margin-top:0}.common-loadmore[data-v-6e78ca1a]{font-size:%?28?%;text-align:center;color:#5bc797;margin-top:%?30?%}.drawer-item-box[data-v-6e78ca1a]{width:100%;height:%?850?%;border:1p solid red;overflow:auto!important}.drawer-item-box .drawer-item[data-v-6e78ca1a]{width:calc(100% - %?30?% * 2);margin:0 auto;padding:%?28?% 0 %?30?% 0}.drawer-item-box .drawer-item .drawer-item-title[data-v-6e78ca1a]{width:100%;font-size:%?34?%;color:#000;padding-bottom:%?30?%}.drawer-item-box .drawer-item .drawer-item-btn[data-v-6e78ca1a]{width:100%;display:flex;justify-content:flex-start;flex-wrap:wrap}.drawer-item-box .drawer-item .drawer-item-btn .drawer-item-btn-type[data-v-6e78ca1a]{width:calc(33% - %?20?%);height:%?75?%;background-color:#f8f8f8;border-radius:%?58?%;text-align:center;line-height:%?75?%;font-size:%?25?%;color:#4a4a4a;margin:0 %?30?% %?20?% 0}.drawer-item-box .drawer-item .drawer-item-btn .drawer-item-btn-type[data-v-6e78ca1a]:nth-child(3){margin-right:0}.drawer-item-box .drawer-item .drawer-item-btn .drawer-item-btn-type-active[data-v-6e78ca1a]{background-color:#5bc797;color:#fff}.drawer-item-box .drawer-item .drawer-item-btn .drawer-item-btn-date[data-v-6e78ca1a]{width:100%;height:%?100?%;text-align:center;border-bottom:%?1?% solid #5bc797;display:flex;justify-content:center;align-items:center}.drawer-item-box .drawer-item .drawer-item-btn .drawer-item-btn-date .drawer-item-btn-date-icon[data-v-6e78ca1a]{margin-right:%?10?%}.drawer-item-box .drawer-item .drawer-item-btn .drawer-item-btn-date .drawer-item-btn-date-text[data-v-6e78ca1a]{font-size:%?30?%;color:#5bc797;line-height:%?100?%}.drawer-item-box .drawer-item .drawer-item-btn uni-picker-view[data-v-6e78ca1a]{width:100%;height:%?300?%}.drawer-item-box .drawer-item .drawer-item-btn uni-picker-view .picker-view-item[data-v-6e78ca1a]{line-height:%?100?%;text-align:center}.drawer-button-box[data-v-6e78ca1a]{width:100%;height:calc(%?76?% + %?50?%);position:absolute;background-color:#fff;bottom:0;z-index:10;padding-top:%?22?%}.drawer-button-box .drawer-button[data-v-6e78ca1a]{width:calc(100% - %?30?% * 2);height:%?76?%;margin:0 auto;border-radius:%?70?%;display:flex;justify-content:space-between;overflow:hidden}.drawer-button-box .drawer-button .drawer-button-item[data-v-6e78ca1a]{width:50%;height:100%;line-height:%?76?%;text-align:center;color:#fff;font-size:%?28?%;letter-spacing:%?10?%;text-indent:%?10?%}.drawer-button-box .drawer-button .drawer-button-reset[data-v-6e78ca1a]{background-color:#f8bb32}.drawer-button-box .drawer-button .drawer-button-submit[data-v-6e78ca1a]{background-color:#5bc797}.drawer-button-box .drawer-edit[data-v-6e78ca1a]{width:calc(100% - %?70?%);height:%?52?%;margin:%?20?% auto 0 auto;display:flex;justify-content:space-between}.drawer-button-box .drawer-edit .drawer-edit-all[data-v-6e78ca1a]{width:40%;font-size:%?28?%;color:#313131;padding-left:%?20?%}.drawer-button-box .drawer-edit .drawer-edit-button[data-v-6e78ca1a]{width:60%;font-size:%?24?%;display:flex;justify-content:flex-end;align-items:center}.drawer-button-box .drawer-edit .drawer-edit-button .drawer-edit-btn[data-v-6e78ca1a]{height:100%;line-height:%?52?%;text-align:center;background-color:#fff;border-radius:%?40?%;margin-left:%?20?%;padding:0 %?32?%}.drawer-button-box .drawer-edit .drawer-edit-button .drawer-edit-btn-delete[data-v-6e78ca1a]{border:1px solid #ff5147;color:#ff5147}.drawer-button-box .drawer-edit .drawer-edit-button .drawer-edit-btn-quit[data-v-6e78ca1a]{border:1px solid #5bc797;color:#5bc797}.drawer-button-box .drawer-add[data-v-6e78ca1a]{width:calc(100% - %?60?%);margin:0 auto;display:flex;justify-content:space-between;align-items:center}.drawer-button-box .drawer-add .drawer-add-scan[data-v-6e78ca1a]{display:flex;justify-content:center;align-items:center}.drawer-button-box .drawer-add .drawer-add-scan .drawer-add-scan-icon[data-v-6e78ca1a]{margin-right:%?10?%;position:relative;top:%?2?%}.drawer-button-box .drawer-add .drawer-add-scan uni-text[data-v-6e78ca1a]{color:#313131}.drawer-button-box .drawer-add .drawer-add-submit[data-v-6e78ca1a]{width:%?200?%;height:%?76?%;background-color:#5bc797;box-shadow:0 2px 8px 1px rgba(0,128,71,.31);border-radius:%?70?%;text-align:center;line-height:%?76?%;color:#fff;font-size:%?28?%;letter-spacing:%?10?%;text-indent:%?10?%}.drawer-button-box-gap[data-v-6e78ca1a]{width:100%;height:calc(%?76?% + %?50?% + %?50?%)}.goods-button-box[data-v-6e78ca1a]{position:fixed}.goods-button-box-gap[data-v-6e78ca1a]{width:100%;height:calc(%?76?% + %?50?% - %?10?%)}.card-two[data-v-6e78ca1a]{width:calc(100% - %?30?% * 2);margin:calc(%?30?% + %?15?%) auto 0 auto;background-color:#fff;border-radius:%?15?%}.card-two .card-two-head[data-v-6e78ca1a]{width:100%;height:%?96?%;display:flex;justify-content:space-between}.card-two .card-two-head .card-two-head-item[data-v-6e78ca1a]{width:50%;height:100%;font-size:%?28?%;text-align:center;line-height:%?96?%;color:#838383;background:#e9e9e9;border-radius:%?15?%;letter-spacing:%?5?%;text-indent:%?5?%}.card-two .card-two-head .card-two-head-item-active[data-v-6e78ca1a]{height:calc(100% + %?15?%);line-height:calc(%?96?% + %?15?%);color:#303031;font-size:%?32?%;background-color:#fff;position:relative;top:%?-15?%}.card-two .card-two-head .card-two-head-item-first[data-v-6e78ca1a]{border-radius:%?15?% 0 %?15?% 0}.card-two .card-two-head .card-two-head-item-second[data-v-6e78ca1a]{border-radius:0 %?15?% 0 %?15?%}.card-two .card-two-content[data-v-6e78ca1a]{width:100%;padding:%?20?% 0 %?10?% 0}.notice-detail-box[data-v-6e78ca1a]{width:100%;height:auto;background-color:#f8f8f8;padding-bottom:%?68?%}.notice-detail-box .common-box .status-bar-wx[data-v-6e78ca1a]{height:var(--statusbarheight);width:100%;background-color:#fff;position:fixed;top:0;z-index:8}.notice-detail-box .common-box .status-bar-wx-fake[data-v-6e78ca1a]{height:var(--statusbarheight);width:100%}.notice-detail-box .common-box .top-nav[data-v-6e78ca1a]{top:var(--statusbarheight)}.notice-detail-box .common-box .page-bg[data-v-6e78ca1a]{width:100%;height:var(--clientheight);position:fixed;top:0;background-color:#f8f8f8;z-index:-1}",""]),t.exports=a},ce9a:function(t,a,e){var o=e("c75f");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("6cb08c29",o,!0,{sourceMap:!1,shadowMode:!1})}}]);