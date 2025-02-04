const all_level = [
    "Basics-db2",         // 0元 只有db2f和一个默认db2t 5G流量
    "Normal-db1",         // 10元有全部db1和db2 200G流量 16元 有全部db1和db2 400G流量 不含cdg
    "High-hyperboost42",  // 22元 有全部db1和db2 + cdg 800G流量
    "VIP1-mernfrank",     // 28元 有全部db1和db2与直连dj 以及nnr中专dj
    "Customize-1173",     // 定制
    "Customize-sein2a",   // 定制sein2a
    "VIP2-hyperboost42",  // 28元 有全部db1和db2 以及gr中专db1
    "Admin-dmin16",       // 管理员订阅
    "Admin-dminFj",       // 副管理员订阅
];

const date9999_RegExp = new RegExp('9999-99-99', 'g');
const administrator_uuid = "1f341cba-24ae-4b38-a52f-040825cadf9b";
const administrator_uuid_RegExp = new RegExp(administrator_uuid, 'g');

let uuidMapInfo = new Map();
uuidMapInfo.set("1f341cba-24ae-4b38-a52f-040825cadf9b", { level: "Admin-dmin16",        user_name: "sym",       expireDate: "2099-09-09 -1" });
uuidMapInfo.set("6fd8ee5c-8569-43ad-a636-1b8c97c5140f", { level: "VIP2-hyperboost42",   user_name: "zxf",       expireDate: "2030-01-01 800GB+200" });
uuidMapInfo.set("e3cb1dc2-6c3d-48c9-8881-4d5db4674536", { level: "Customize-sein2a",    user_name: "sein2a",    expireDate: "2025-05-05 800GB+600" });
uuidMapInfo.set("26c36ce8-8df7-4b09-d1b4-23d4ad14b5f3", { level: "VIP1-mernfrank",      user_name: "kevin",     expireDate: "2025-05-09 800GB+300" });
uuidMapInfo.set("f579d6d3-a7d3-4633-f519-27b25402e1bb", { level: "VIP2-hyperboost42",   user_name: "oldzhang",  expireDate: "2025-08-27 800GB+200" });
uuidMapInfo.set("4f1af3a7-2872-4868-e955-84865342fd42", { level: "VIP2-hyperboost42",   user_name: "yin",       expireDate: "2024-11-06 800GB+200" });
uuidMapInfo.set("511a171f-6ca4-4b64-bd0d-7ad83a05ab11", { level: "Normal-db1",          user_name: "psycho",    expireDate: "2025-02-06 400" });
uuidMapInfo.set("bde98f18-a15f-4316-e5bb-a6d177fb9551", { level: "Normal-db1",          user_name: "oldfuck",   expireDate: "2025-01-07 200" });
uuidMapInfo.set("2a739678-3b0c-4661-87da-df612c397d2b", { level: "VIP2-hyperboost42",   user_name: "zxfyou",    expireDate: "2024-09-14 800GB+200" });
uuidMapInfo.set("d5718c0b-ebfd-4b58-bcf8-d4cb83cf15d7", { level: "Normal-db1",          user_name: "ti7_cyjq",  expireDate: "2025-06-22 200" });
uuidMapInfo.set("5f8c7de6-f217-4ff8-a4d1-7d36f4673f3e", { level: "Basics-db2",          user_name: "human",     expireDate: "2024-08-31 10" });
uuidMapInfo.set("58415d21-7f7c-473a-bd72-e452a1d5ad9b", { level: "Customize-1173",      user_name: "xzr",       expireDate: "2099-09-09 -1" });

const readMe_text = '说明:到期时间9999-99-99GB+10GB备用节点流量';
const readMe_db2f = `
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@db2f.hyperboost42.cc:443?encryption=none&security=tls&sni=db2f.hyperboost42.cc&fp=chrome&type=ws&host=db2f.hyperboost42.cc&path=%2FwsData52987#${encodeURIComponent(readMe_text)}
`;

const db2_EndPs = '大版备用';
const Basics_db2 = `
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@db2f.hyperboost42.cc:443?encryption=none&security=tls&sni=db2f.hyperboost42.cc&fp=chrome&type=ws&host=db2f.hyperboost42.cc&path=%2FwsData52987#${encodeURIComponent(db2_EndPs)}f0
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@cf1.hyperboost42.cc:443?encryption=none&security=tls&sni=db2f.hyperboost42.cc&fp=chrome&type=ws&host=db2f.hyperboost42.cc&path=%2FwsData52987#${encodeURIComponent(db2_EndPs)}f1
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@cf2.hyperboost42.cc:443?encryption=none&security=tls&sni=db2f.hyperboost42.cc&fp=chrome&type=ws&host=db2f.hyperboost42.cc&path=%2FwsData52987#${encodeURIComponent(db2_EndPs)}f2
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@cf3.hyperboost42.cc:443?encryption=none&security=tls&sni=db2f.hyperboost42.cc&fp=chrome&type=ws&host=db2f.hyperboost42.cc&path=%2FwsData52987#${encodeURIComponent(db2_EndPs)}f3
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@db2t.hyperboost42.cc:443?encryption=none&security=tls&sni=db2t.hyperboost24.cc&fp=chrome&type=ws&host=db2t.hyperboost24.cc&path=%2FwsData52987#${encodeURIComponent(db2_EndPs)}t0
`;

const db1_EndPs = '大版';
const Normal_db1 = `
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@db1f.hyperboost42.cc:443?encryption=none&security=tls&sni=db1f.hyperboost42.cc&fp=chrome&type=ws&host=db1f.hyperboost42.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}f0
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@cf1.hyperboost42.cc:443?encryption=none&security=tls&sni=db1f.hyperboost42.cc&fp=chrome&type=ws&host=db1f.hyperboost42.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}f1
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@cf2.hyperboost42.cc:443?encryption=none&security=tls&sni=db1f.hyperboost42.cc&fp=chrome&type=ws&host=db1f.hyperboost42.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}f2
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@cf3.hyperboost42.cc:443?encryption=none&security=tls&sni=db1f.hyperboost42.cc&fp=chrome&type=ws&host=db1f.hyperboost42.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}f3
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@db1t.hyperboost42.cc:443?encryption=none&security=tls&sni=db1t.hyperboost24.cc&fp=chrome&type=ws&host=db1t.hyperboost24.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}t0
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@cft1.hyperboost42.cc:443?encryption=none&security=tls&sni=db1t.hyperboost24.cc&fp=chrome&type=ws&host=db1t.hyperboost24.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}t1
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@cft2.hyperboost42.cc:443?encryption=none&security=tls&sni=db1t.hyperboost24.cc&fp=chrome&type=ws&host=db1t.hyperboost24.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}t2
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@cft3.hyperboost42.cc:443?encryption=none&security=tls&sni=db1t.hyperboost24.cc&fp=chrome&type=ws&host=db1t.hyperboost24.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}t3
`;
//vless://1f341cba-24ae-4b38-a52f-040825cadf9b@cft4.hyperboost42.cc:443?encryption=none&security=tls&sni=db1t.hyperboost24.cc&fp=chrome&type=ws&host=db1t.hyperboost24.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}t4
//vless://1f341cba-24ae-4b38-a52f-040825cadf9b@cf4.hyperboost42.cc:443?encryption=none&security=tls&sni=db1f.hyperboost42.cc&fp=chrome&type=ws&host=db1f.hyperboost42.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}f4

const High_hyperboost42 = `
`;
// vless://1f341cba-24ae-4b38-a52f-040825cadf9b@cdg1.hyperboost42.cc:443?encryption=none&security=tls&sni=sg1-speedtest.tools.gcore.com&fp=chrome&type=ws&host=hyperboost42.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}g1
// vless://1f341cba-24ae-4b38-a52f-040825cadf9b@cdg2.hyperboost42.cc:443?encryption=none&security=tls&sni=kx-speedtest.tools.gcore.com&fp=chrome&type=ws&host=hyperboost42.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}g2
// vless://1f341cba-24ae-4b38-a52f-040825cadf9b@cdg3.hyperboost42.cc:443?encryption=none&security=tls&sni=la2-speedtest.tools.gcore.com&fp=chrome&type=ws&host=hyperboost42.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}g3

const VIP1_mernfrank = `
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@zz1.mernfrank.cc:51173?encryption=none&flow=xtls-rprx-vision&security=tls&sni=dj.mernfrank.cc&fp=chrome&type=tcp&headerType=none#${encodeURIComponent("东京中转1 (上海->日本 国内中转流量3倍率)")}
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@zz2.mernfrank.cc:41173?encryption=none&flow=xtls-rprx-vision&security=tls&sni=dj.mernfrank.cc&fp=chrome&type=tcp&headerType=none#${encodeURIComponent("东京中转2 (武汉->日本 国内中转流量2倍率)")}
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@zz3.mernfrank.cc:41173?encryption=none&flow=xtls-rprx-vision&security=tls&sni=dj.mernfrank.cc&fp=chrome&type=tcp&headerType=none#${encodeURIComponent("东京中转3 (内蒙->香港 国内中转流量1倍率 仅ipV6)")}
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@zz4.mernfrank.cc:41173?encryption=none&flow=xtls-rprx-vision&security=tls&sni=dj.mernfrank.cc&fp=chrome&type=tcp&headerType=none#${encodeURIComponent("东京中转4 (武汉->香港 国内中转流量3倍率)")}
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@5.226.49.135:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=dj.mernfrank.cc&fp=chrome&type=tcp&headerType=none#${encodeURIComponent("东京高速直连0 (不消耗国内中转流量)")}
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@dj.mernfrank.cc:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=dj.mernfrank.cc&fp=chrome&type=tcp&headerType=none#${encodeURIComponent("东京高速直连0 (不消耗国内中转流量)")}
`;

const VIP2_hyperboost42 = `
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@zzgr1.hyperboost42.cc:42737?encryption=none&security=none&fp=edge&type=tcp&headerType=none#${encodeURIComponent('大版国内中转gr1沪日IEPL线路 (国内中转流量15倍率)')}
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@zzgr2.hyperboost42.cc:11737?encryption=none&security=none&fp=edge&type=tcp&headerType=none#${encodeURIComponent('大版国内中转gr2沪移线路 (国内中转流量2倍率)')}
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@zzgr3.hyperboost42.cc:51737?encryption=none&security=none&fp=edge&type=tcp&headerType=none#${encodeURIComponent('大版国内中转gr3沪港IEPL线路 (国内中转流量10倍率)')}
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@zzgr4.hyperboost42.cc:31737?encryption=none&security=none&fp=edge&type=tcp&headerType=none#${encodeURIComponent('大版国内中转gr4广港IEPL线路 (国内中转流量10倍率)')}
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@zzgr5.hyperboost42.cc:11737?encryption=none&security=none&fp=edge&type=tcp&headerType=none#${encodeURIComponent('大版国内中转gr5广移线路 (国内中转流量3倍率)')}
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@zzgr6.hyperboost42.cc:12737?encryption=none&security=none&fp=edge&type=tcp&headerType=none#${encodeURIComponent('大版国内中转gr6广移线路 (国内中转流量1.5倍率)')}
`;
//vless://1f341cba-24ae-4b38-a52f-040825cadf9b@zzgr7.hyperboost42.cc:12737?encryption=none&security=none&fp=edge&type=tcp&headerType=none#${encodeURIComponent('大版国内中转gr7沪移线路 (国内中转流量1.5倍率)')}

//定制节点
const Customize_1173Info = `
vless://58415d21-7f7c-473a-bd72-e452a1d5ad9b@152.69.234.110:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=kr.mernfrank.cc&fp=edge&type=tcp&headerType=none#%E9%9F%A9%E5%9B%BD%E7%9B%B4%E8%BF%9E
vless://58415d21-7f7c-473a-bd72-e452a1d5ad9b@kr.mernfrank.cc:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=kr.mernfrank.cc&fp=edge&type=tcp&headerType=none#%E9%9F%A9%E5%9B%BD%E7%9B%B4%E8%BF%9E
vless://58415d21-7f7c-473a-bd72-e452a1d5ad9b@hgf.mernfrank.cc:443?encryption=none&security=tls&sni=hgf.mernfrank.cc&type=ws&host=hgf.mernfrank.cc&path=%2FwsData52987#%E9%9F%A9%E5%9B%BDf0
vless://58415d21-7f7c-473a-bd72-e452a1d5ad9b@cf1.hyperboost42.cc:443?encryption=none&security=tls&sni=hgf.mernfrank.cc&type=ws&host=hgf.mernfrank.cc&path=%2FwsData52987#%E9%9F%A9%E5%9B%BDf1
vless://58415d21-7f7c-473a-bd72-e452a1d5ad9b@cf2.hyperboost42.cc:443?encryption=none&security=tls&sni=hgf.mernfrank.cc&type=ws&host=hgf.mernfrank.cc&path=%2FwsData52987#%E9%9F%A9%E5%9B%BDf2
vless://58415d21-7f7c-473a-bd72-e452a1d5ad9b@cf3.hyperboost42.cc:443?encryption=none&security=tls&sni=hgf.mernfrank.cc&type=ws&host=hgf.mernfrank.cc&path=%2FwsData52987#%E9%9F%A9%E5%9B%BDf3
vless://58415d21-7f7c-473a-bd72-e452a1d5ad9b@cf4.hyperboost42.cc:443?encryption=none&security=tls&sni=hgf.mernfrank.cc&type=ws&host=hgf.mernfrank.cc&path=%2FwsData52987#%E9%9F%A9%E5%9B%BDf4
vless://58415d21-7f7c-473a-bd72-e452a1d5ad9b@zzgr_kr.mernfrank.cc:16737?encryption=none&security=none&type=tcp&headerType=none#%E9%9F%A9%E5%9B%BD%E5%B9%BF%E7%A7%BB%EF%BC%88%E5%9B%BD%E5%86%85%E4%B8%AD%E8%BD%AC%E6%B5%81%E9%87%8F1.5%E5%80%8D%E7%8E%87%EF%BC%89
`;

//定制节点
const Customize_sein2a = `
vless://e3cb1dc2-6c3d-48c9-8881-4d5db4674536@zzgr1.mernfrank.cc:42738?encryption=none&security=none&fp=edge&type=tcp&headerType=none#${encodeURIComponent("东京中转gr1沪日IEPL电信移动双线 (国内中转流量15倍率)")}
vless://e3cb1dc2-6c3d-48c9-8881-4d5db4674536@zzgr2.mernfrank.cc:42738?encryption=none&security=none&fp=edge&type=tcp&headerType=none#${encodeURIComponent("东京中转gr2沪日IEPL联通线路 (国内中转流量15倍率)")}
vless://e3cb1dc2-6c3d-48c9-8881-4d5db4674536@zzgr3.mernfrank.cc:51738?encryption=none&security=none&fp=edge&type=tcp&headerType=none#${encodeURIComponent("东京中转gr3沪港IEPL线路 (国内中转流量10倍率)")}
vless://e3cb1dc2-6c3d-48c9-8881-4d5db4674536@zzgr4.mernfrank.cc:31738?encryption=none&security=none&fp=edge&type=tcp&headerType=none#${encodeURIComponent("东京中转gr4广港IEPL线路 (国内中转流量10倍率)")}
vless://e3cb1dc2-6c3d-48c9-8881-4d5db4674536@zzgr5.mernfrank.cc:12739?encryption=none&security=none&fp=edge&type=tcp&headerType=none#${encodeURIComponent("东京中转gr5江苏移动线路 (国内中转流量3倍率)")}
vless://e3cb1dc2-6c3d-48c9-8881-4d5db4674536@5.226.49.135:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=dj.mernfrank.cc&fp=chrome&type=tcp&headerType=none#${encodeURIComponent("东京高速直连0 (不消耗国内中转流量)")}
vless://e3cb1dc2-6c3d-48c9-8881-4d5db4674536@dj.mernfrank.cc:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=dj.mernfrank.cc&fp=chrome&type=tcp&headerType=none#${encodeURIComponent("东京高速直连0 (不消耗国内中转流量)")}
vless://e3cb1dc2-6c3d-48c9-8881-4d5db4674536@db1f.hyperboost42.cc:443?encryption=none&security=tls&sni=db1f.hyperboost42.cc&fp=chrome&type=ws&host=db1f.hyperboost42.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}f0
vless://e3cb1dc2-6c3d-48c9-8881-4d5db4674536@cf1.hyperboost42.cc:443?encryption=none&security=tls&sni=db1f.hyperboost42.cc&fp=chrome&type=ws&host=db1f.hyperboost42.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}f1
vless://e3cb1dc2-6c3d-48c9-8881-4d5db4674536@cf2.hyperboost42.cc:443?encryption=none&security=tls&sni=db1f.hyperboost42.cc&fp=chrome&type=ws&host=db1f.hyperboost42.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}f2
vless://e3cb1dc2-6c3d-48c9-8881-4d5db4674536@cf3.hyperboost42.cc:443?encryption=none&security=tls&sni=db1f.hyperboost42.cc&fp=chrome&type=ws&host=db1f.hyperboost42.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}f3
vless://e3cb1dc2-6c3d-48c9-8881-4d5db4674536@db1t.hyperboost42.cc:443?encryption=none&security=tls&sni=db1t.hyperboost24.cc&fp=chrome&type=ws&host=db1t.hyperboost24.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}t0
vless://e3cb1dc2-6c3d-48c9-8881-4d5db4674536@cft1.hyperboost42.cc:443?encryption=none&security=tls&sni=db1t.hyperboost24.cc&fp=chrome&type=ws&host=db1t.hyperboost24.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}t1
vless://e3cb1dc2-6c3d-48c9-8881-4d5db4674536@cft2.hyperboost42.cc:443?encryption=none&security=tls&sni=db1t.hyperboost24.cc&fp=chrome&type=ws&host=db1t.hyperboost24.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}t2
vless://e3cb1dc2-6c3d-48c9-8881-4d5db4674536@cft3.hyperboost42.cc:443?encryption=none&security=tls&sni=db1t.hyperboost24.cc&fp=chrome&type=ws&host=db1t.hyperboost24.cc&path=%2FwsData52987#${encodeURIComponent(db1_EndPs)}t3
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@db2f.hyperboost42.cc:443?encryption=none&security=tls&sni=db2f.hyperboost42.cc&fp=chrome&type=ws&host=db2f.hyperboost42.cc&path=%2FwsData52987#${encodeURIComponent(db2_EndPs)}f0
`;

const adminLink = `
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@zzgr8.hyperboost42.cc:31737?encryption=none&security=none&fp=edge&type=tcp&headerType=none#%E5%A4%A7%E7%89%88%E5%9B%BD%E5%86%85%E4%B8%AD%E8%BD%ACgr8%E6%B7%B1%E6%B8%AFIPLC%E7%BA%BF%E8%B7%AF%20%28%E6%B5%81%E9%87%8F40%E5%80%8D%E7%8E%87%29
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@zzgr1.game.mernfrank.cc:41737?encryption=none&flow=xtls-rprx-vision&security=none&sni=dj.mernfrank.cc&fp=chrome&type=tcp&headerType=none#%E6%B8%B8%E6%88%8Fgr%E6%B2%AA%E6%97%A5%20%28%E5%9B%BD%E5%86%85%E4%B8%AD%E8%BD%AC%E6%B5%81%E9%87%8F15%E5%80%8D%E7%8E%87%29
vless://1f341cba-24ae-4b38-a52f-040825cadf9b@shjp1-08051751.520300.xyz:41737?encryption=none&security=none&type=tcp&headerType=none#%E6%B8%B8%E6%88%8Fgr%E6%B2%AA%E6%97%A5%20%28%E5%9B%BD%E5%86%85%E4%B8%AD%E8%BD%AC%E6%B5%81%E9%87%8F15%E5%80%8D%E7%8E%87%29
`;

const all_info = [Basics_db2, Normal_db1, High_hyperboost42, VIP1_mernfrank];

// 设置优选地址，不带端口号默认443，TLS订阅生成
let addresses = [
    //'icook.tw:2053#官方优选域名',
    //'cloudflare.cfgo.cc#优选官方线路',
];

// 设置优选地址api接口
let addressesapi = [
    'https://raw.githubusercontent.com/cmliu/WorkerVless2sub/main/addressesapi.txt', //可参考内容格式 自行搭建
    'https://addressesapi.090227.xyz/CloudFlareYes',
    'https://addressesapi.090227.xyz/ct',
    'https://addressesapi.090227.xyz/cmcc',
    'https://addressesapi.090227.xyz/ip.164746.xyz',
    'https://cn.xxxxxxxx.tk/',
    'https://ct.xxxxxxxx.tk/',
    'https://cm.xxxxxxxx.tk/',
    'https://cu.xxxxxxxx.tk/',
    //'https://cnv6.xxxxxxxx.tk/',
    //'https://ctv6.xxxxxxxx.tk/',
    //'https://cmv6.xxxxxxxx.tk/',
    //'https://cuv6.xxxxxxxx.tk/',
    //'https://raw.githubusercontent.com/cmliu/WorkerVless2sub/main/addressesipv6api.txt', //IPv6优选内容格式 自行搭建
];

// 设置优选地址，不带端口号默认80，noTLS订阅生成
let addressesnotls = [
    'www.visa.com.sg',
    //'www.wto.org:8080',
    //'www.who.int:8880',
];

// 设置优选noTLS地址api接口
let addressesnotlsapi = [
    'https://raw.githubusercontent.com/cmliu/CFcdnVmess2sub/main/addressesapi.txt', //可参考内容格式 自行搭建
];
//速度下限
let DLS = 5;
let addressescsv = [
    //  'https://raw.githubusercontent.com/cmliu/WorkerVless2sub/main/addressescsv.csv', //iptest测速结果文件
];

let subconverter = "apiurl.v1.mk"; //在线订阅转换后端，目前使用肥羊的订阅转换功能支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_Full_MultiMode.ini"; //订阅转换配置文件
let noTLS = true; //改为 true , 将不做域名判断 始终返回noTLS节点
let link = '';
let edgetunnel = 'ed';
let RproxyIP = 'false';
let proxyIPs = [
    'proxyip.aliyun.fxxk.dedyn.io',
    'proxyip.multacom.fxxk.dedyn.io',
    'proxyip.vultr.fxxk.dedyn.io',
];
let CMproxyIPs = [
    { proxyIP: "proxyip.fxxk.dedyn.io", type: "HK" },
];
let BotToken = '6925118269:AAHy5CoHDKel0dQUnWrO5-GKngOk1IJfCkg';
let ChatID = '1053446707';
let proxyhosts = [//本地代理域名池
    //'ppfv2tl9veojd-maillazy.pages.dev',
];
let proxyhostsURL = 'https://raw.githubusercontent.com/cmliu/CFcdnVmess2sub/main/proxyhosts';//在线代理域名池URL
let EndPS = '大版f ';//节点名备注内容

let FileName = 'ozof3_sub';
let SUBUpdateTime = 6;
let total = 99;//PB
let timestamp = 4102329600000;//2099-12-31 = now;
let MamaJustKilledAMan = ['telegram', 'twitter', 'miaoko'];
const regex = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[.*\]):?(\d+)?#?(.*)?$/;
async function sendMessage(type, ip, add_data = "") {
    if (BotToken !== '' && ChatID !== '') {
        let msg = "";
        const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
        if (response.status == 200) {
            const ipInfo = await response.json();
            msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
        } else {
            msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
        }

        let url = "https://api.telegram.org/bot" + BotToken + "/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
        return fetch(url, {
            method: 'get',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;',
                'Accept-Encoding': 'gzip, deflate, br',
                'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
            }
        });
    }
}

async function getAddressesapi(api) {
    if (!api || api.length === 0) {
        return [];
    }

    let newapi = "";

    // 创建一个AbortController对象，用于控制fetch请求的取消
    const controller = new AbortController();

    const timeout = setTimeout(() => {
        controller.abort(); // 取消所有请求
    }, 2000); // 2秒后触发

    try {
        // 使用Promise.allSettled等待所有API请求完成，无论成功或失败
        // 对api数组进行遍历，对每个API地址发起fetch请求
        const responses = await Promise.allSettled(api.map(apiUrl => fetch(apiUrl, {
            method: 'get',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;',
                'User-Agent': 'cmliu/WorkerVless2sub'
            },
            signal: controller.signal // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
        }).then(response => response.ok ? response.text() : Promise.reject())));

        // 遍历所有响应
        for (const response of responses) {
            // 检查响应状态是否为'fulfilled'，即请求成功完成
            if (response.status === 'fulfilled') {
                // 获取响应的内容
                const content = await response.value;
                newapi += content + '\n';
            }
        }
    } catch (error) {
        console.error(error);
    } finally {
        // 无论成功或失败，最后都清除设置的超时定时器
        clearTimeout(timeout);
    }

    const newAddressesapi = await ADD(newapi);

    // 返回处理后的结果
    return newAddressesapi;
}

async function getAddressescsv(tls) {
    if (!addressescsv || addressescsv.length === 0) {
        return [];
    }

    let newAddressescsv = [];

    for (const csvUrl of addressescsv) {
        try {
            const response = await fetch(csvUrl);

            if (!response.ok) {
                console.error('获取CSV地址时出错:', response.status, response.statusText);
                continue;
            }

            const text = await response.text();// 使用正确的字符编码解析文本内容
            let lines;
            if (text.includes('\r\n')) {
                lines = text.split('\r\n');
            } else {
                lines = text.split('\n');
            }

            // 检查CSV头部是否包含必需字段
            const header = lines[0].split(',');
            const tlsIndex = header.indexOf('TLS');
            const speedIndex = header.length - 1; // 最后一个字段

            const ipAddressIndex = 0;// IP地址在 CSV 头部的位置
            const portIndex = 1;// 端口在 CSV 头部的位置
            const dataCenterIndex = tlsIndex + 1; // 数据中心是 TLS 的后一个字段

            if (tlsIndex === -1) {
                console.error('CSV文件缺少必需的字段');
                continue;
            }

            // 从第二行开始遍历CSV行
            for (let i = 1; i < lines.length; i++) {
                const columns = lines[i].split(',');

                // 检查TLS是否为"TRUE"且速度大于DLS
                if (columns[tlsIndex].toUpperCase() === tls && parseFloat(columns[speedIndex]) > DLS) {
                    const ipAddress = columns[ipAddressIndex];
                    const port = columns[portIndex];
                    const dataCenter = columns[dataCenterIndex];

                    const formattedAddress = `${ipAddress}:${port}#${dataCenter}`;
                    newAddressescsv.push(formattedAddress);
                }
            }
        } catch (error) {
            console.error('获取CSV地址时出错:', error);
            continue;
        }
    }

    return newAddressescsv;
}

async function ADD(envadd) {
    var addtext = envadd.replace(/[	|"'\r\n]+/g, ',').replace(/,+/g, ',');	// 将空格、双引号、单引号和换行符替换为逗号
    //console.log(addtext);
    if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
    if (addtext.charAt(addtext.length - 1) == ',') addtext = addtext.slice(0, addtext.length - 1);
    const add = addtext.split(',');
    //console.log(add);
    return add;
}

async function nginx() {
    const text = `
        <!DOCTYPE html>
        <html>
        <head>
        <title>Welcome to nginx!</title>
        <style>
            body {
            width: 35em;
            margin: 0 auto;
            font-family: Tahoma, Verdana, Arial, sans-serif;
            }
        </style>
        </head>
        <body>
        <h1>Welcome to nginx!</h1>
        <p>If you see this page, the nginx web server is successfully installed and
        working. Further configuration is required.</p>

        <p>For online documentation and support please refer to
        <a href="http://nginx.org/">nginx.org</a>.<br/>
        Commercial support is available at
        <a href="http://nginx.com/">nginx.com</a>.</p>

        <p><em>Thank you for using nginx.</em></p>
        </body>
        </html>
        `
    return text;
}

export default {
    async fetch(request, env) {
        BotToken = env.TGTOKEN || BotToken;
        ChatID = env.TGID || ChatID;
        subconverter = env.SUBAPI || subconverter;
        subconfig = env.SUBCONFIG || subconfig;
        FileName = env.SUBNAME || FileName;
        EndPS = env.PS || EndPS;
        const userAgentHeader = request.headers.get('User-Agent');
        const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
        const url = new URL(request.url);
        const format = url.searchParams.get('format') ? url.searchParams.get('format').toLowerCase() : "null";
        let host = "";
        let uuid = "";
        let path = "";
        let sni = "";
        let UD = Math.floor(((timestamp - Date.now()) / timestamp * 99 * 1099511627776 * 1024) / 2);
        if (env.UA) MamaJustKilledAMan = MamaJustKilledAMan.concat(await ADD(env.UA));
        total = total * 1099511627776 * 1024;
        let expire = Math.floor(timestamp / 1000);

        link = env.LINK || link;
        const links = await ADD(link);
        link = links.join('\n');

        if (env.ADD) addresses = await ADD(env.ADD);
        if (env.ADDAPI) addressesapi = await ADD(env.ADDAPI);
        if (env.ADDNOTLS) addressesnotls = await ADD(env.ADDNOTLS);
        if (env.ADDNOTLSAPI) addressesnotlsapi = await ADD(env.ADDNOTLSAPI);
        if (env.ADDCSV) addressescsv = await ADD(env.ADDCSV);
        DLS = env.DLS || DLS;

        /*
        console.log(`
        addresses: ${addresses}
        addressesapi: ${addressesapi}
        addressesnotls: ${addressesnotls}
        addressesnotlsapi: ${addressesnotlsapi}
        addressescsv: ${addressescsv}
        DLS: ${DLS}
        `);
        */

        if (env.PROXYIP) proxyIPs = await ADD(env.PROXYIP);
        //console.log(proxyIPs);

        host = "null";
        if (env.HOST) {
            const hosts = await ADD(env.HOST);
            host = hosts[Math.floor(Math.random() * hosts.length)];
        }

        uuid = url.searchParams.get('uuid');
        const userInfo = uuidMapInfo.get(uuid);
        if (userInfo == undefined) {
            const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
            if (envKey) {
                const URLs = await ADD(env[envKey]);
                const URL = URLs[Math.floor(Math.random() * URLs.length)];
                return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
            }
            //首页改成一个nginx伪装页
            return new Response(await nginx(), {
                headers: {
                    'Content-Type': 'text/html; charset=UTF-8',
                },
            });
        }

        const level = url.searchParams.get('level');
        if (!all_level.includes(level)) {
            await sendMessage("#level错误", request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>\n无效的等级: ${level}\n用户: ${userInfo.user_name}`);
            return new Response('Invalid level', { status: 403 });
        }
        
        if (userInfo.level != level) {
            await sendMessage("#level错误", request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>\n不匹配的等级: ${level}\n用户: ${userInfo.user_name}`);
            return new Response('Mismatched level', { status: 403 });
        }

        link = readMe_db2f.replace(date9999_RegExp, userInfo.expireDate);
        if (level == "Customize-1173") {
            link = Customize_1173Info;
        } else if (level == "Customize-sein2a") {
            link += Customize_sein2a;
        } else if (level == "Admin-dmin16") {
            link += VIP2_hyperboost42;
            for (let i = all_info.length - 1; i >= 0; i--) {
                link += all_info[i];
            }
            link += adminLink;
        } else if (level == "VIP2-hyperboost42") {
            link += VIP2_hyperboost42;
            const num_level = all_level.indexOf("High-hyperboost42");
            for (let i = num_level; i >= 0; i--) {
                link += all_info[i];
            }
        } else {
            const num_level = all_level.indexOf(level);
            for (let i = num_level; i >= 0; i--) {
                link += all_info[i];
            }
        }

        link = link.replace(administrator_uuid_RegExp, uuid);
        path = env.PATH;
        if (path.length === 0) {
            url.searchParams.get('path');
        }
        sni = url.searchParams.get('sni') || host;
        edgetunnel = url.searchParams.get('edgetunnel') || edgetunnel;
        RproxyIP = url.searchParams.get('proxyip') || RproxyIP;

        if (!uuid) {
            const responseText = `
                缺少必填参数: host 和 uuid
                
                ${url.origin}/sub?host=[your host]&uuid=[your uuid]&path=[your path]
            `;

            return new Response(responseText, {
                status: 400,
                headers: { 'content-type': 'text/plain; charset=utf-8' },
            });
        }

        if (!path || path.trim() === '') {
            path = '/?ed=2560';
        } else {
            // 如果第一个字符不是斜杠，则在前面添加一个斜杠
            path = (path[0] === '/') ? path : '/' + path;
        }

        await sendMessage("#获取订阅", request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>\n用户: ${userInfo.user_name}`);

        noTLS = host.toLowerCase().includes('notls') || host.toLowerCase().includes('worker') || host.toLowerCase().includes('trycloudflare') || noTLS;
        if (env.NOTLS == 'true') noTLS = true;

        if (!userAgent.includes('subconverter') && MamaJustKilledAMan.some(PutAGunAgainstHisHeadPulledMyTriggerNowHesDead => userAgent.includes(PutAGunAgainstHisHeadPulledMyTriggerNowHesDead)) && MamaJustKilledAMan.length > 0) {
            //首页改成一个nginx伪装页
            return new Response(await nginx(), {
                headers: {
                    'Content-Type': 'text/html; charset=UTF-8',
                },
            });
        } else if ((userAgent.includes('clash') || (format === 'clash' && !userAgent.includes('subconverter'))) && !userAgent.includes('nekobox') && !userAgent.includes('cf-workers-sub')) {
            const subconverterUrl = `https://${subconverter}/sub?target=clash&url=${encodeURIComponent(request.url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;

            try {
                const subconverterResponse = await fetch(subconverterUrl);

                if (!subconverterResponse.ok) {
                    throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
                }

                const subconverterContent = await subconverterResponse.text();

                return new Response(subconverterContent, {
                    headers: {
                        "Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
                        "content-type": "text/plain; charset=utf-8",
                        "Profile-Update-Interval": `${SUBUpdateTime}`,
                        "Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
                    },
                });
            } catch (error) {
                return new Response(`Error: ${error.message}`, {
                    status: 500,
                    headers: { 'content-type': 'text/plain; charset=utf-8' },
                });
            }
        } else if ((userAgent.includes('sing-box') || userAgent.includes('singbox') || (format === 'singbox' && !userAgent.includes('subconverter'))) && !userAgent.includes('cf-workers-sub')) {
            const subconverterUrl = `https://${subconverter}/sub?target=singbox&url=${encodeURIComponent(request.url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;

            try {
                const subconverterResponse = await fetch(subconverterUrl);

                if (!subconverterResponse.ok) {
                    throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
                }

                const subconverterContent = await subconverterResponse.text();

                return new Response(subconverterContent, {
                    headers: {
                        "Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
                        "content-type": "text/plain; charset=utf-8",
                        "Profile-Update-Interval": `${SUBUpdateTime}`,
                        "Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
                    },
                });
            } catch (error) {
                return new Response(`Error: ${error.message}`, {
                    status: 500,
                    headers: { 'content-type': 'text/plain; charset=utf-8' },
                });
            }
        } else {
            if (host.includes('workers.dev') || host.includes('pages.dev')) {
                if (proxyhostsURL) {
                    try {
                        const response = await fetch(proxyhostsURL);

                        if (!response.ok) {
                            console.error('获取地址时出错:', response.status, response.statusText);
                            return; // 如果有错误，直接返回
                        }

                        const text = await response.text();
                        const lines = text.split('\n');
                        // 过滤掉空行或只包含空白字符的行
                        const nonEmptyLines = lines.filter(line => line.trim() !== '');

                        proxyhosts = proxyhosts.concat(nonEmptyLines);
                    } catch (error) {
                        console.error('获取地址时出错:', error);
                    }
                }
                // 使用Set对象去重
                proxyhosts = [...new Set(proxyhosts)];
            }

            const newAddressesapi = await getAddressesapi(addressesapi);
            const newAddressescsv = await getAddressescsv('TRUE');
            addresses = addresses.concat(newAddressesapi);
            addresses = addresses.concat(newAddressescsv);

            // 使用Set对象去重
            const uniqueAddresses = [...new Set(addresses)];

            let notlsresponseBody;
            if (noTLS == true) {
                const newAddressesnotlsapi = await getAddressesapi(addressesnotlsapi);
                const newAddressesnotlscsv = await getAddressescsv('FALSE');
                addressesnotls = addressesnotls.concat(newAddressesnotlsapi);
                addressesnotls = addressesnotls.concat(newAddressesnotlscsv);
                const uniqueAddressesnotls = [...new Set(addressesnotls)];

                notlsresponseBody = uniqueAddressesnotls.map(address => {
                    let port = "80";
                    let addressid = address;

                    const match = addressid.match(regex);
                    if (!match) {
                        if (address.includes(':') && address.includes('#')) {
                            const parts = address.split(':');
                            address = parts[0];
                            const subParts = parts[1].split('#');
                            port = subParts[0];
                            addressid = subParts[1];
                        } else if (address.includes(':')) {
                            const parts = address.split(':');
                            address = parts[0];
                            port = parts[1];
                        } else if (address.includes('#')) {
                            const parts = address.split('#');
                            address = parts[0];
                            addressid = parts[1];
                        }

                        if (addressid.includes(':')) {
                            addressid = addressid.split(':')[0];
                        }
                    } else {
                        address = match[1];
                        port = match[2] || port;
                        addressid = match[3] || address;
                    }

                    //console.log(address, port, addressid);

                    if (edgetunnel.trim() === 'cmliu' && RproxyIP.trim() === 'true') {
                        // 将addressid转换为小写
                        let lowerAddressid = addressid.toLowerCase();
                        // 初始化找到的proxyIP为null
                        let foundProxyIP = null;

                        // 遍历CMproxyIPs数组查找匹配项
                        for (let item of CMproxyIPs) {
                            if (lowerAddressid.includes(item.type.toLowerCase())) {
                                foundProxyIP = item.proxyIP;
                                break; // 找到匹配项，跳出循环
                            }
                        }

                        if (foundProxyIP) {
                            // 如果找到匹配的proxyIP，赋值给path
                            path = `/proxyIP=${foundProxyIP}`;
                        } else {
                            // 如果没有找到匹配项，随机选择一个proxyIP
                            const randomProxyIP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];
                            path = `/proxyIP=${randomProxyIP}`;
                        }
                    }

                    const vlessLink = `vless://${uuid}@${address}:${port}?encryption=none&security=&type=ws&host=${host}&path=${encodeURIComponent(path)}#${encodeURIComponent(addressid + EndPS)}`;

                    return vlessLink;
                }).join('\n');
            }

            const responseBody = uniqueAddresses.map(address => {
                let port = "443";
                let addressid = address;

                const match = addressid.match(regex);
                if (!match) {
                    if (address.includes(':') && address.includes('#')) {
                        const parts = address.split(':');
                        address = parts[0];
                        const subParts = parts[1].split('#');
                        port = subParts[0];
                        addressid = subParts[1];
                    } else if (address.includes(':')) {
                        const parts = address.split(':');
                        address = parts[0];
                        port = parts[1];
                    } else if (address.includes('#')) {
                        const parts = address.split('#');
                        address = parts[0];
                        addressid = parts[1];
                    }

                    if (addressid.includes(':')) {
                        addressid = addressid.split(':')[0];
                    }
                } else {
                    address = match[1];
                    port = match[2] || port;
                    addressid = match[3] || address;
                }

                //console.log(address, port, addressid);

                if (edgetunnel.trim() === 'cmliu' && RproxyIP.trim() === 'true') {
                    // 将addressid转换为小写
                    let lowerAddressid = addressid.toLowerCase();
                    // 初始化找到的proxyIP为null
                    let foundProxyIP = null;

                    // 遍历CMproxyIPs数组查找匹配项
                    for (let item of CMproxyIPs) {
                        if (lowerAddressid.includes(item.type.toLowerCase())) {
                            foundProxyIP = item.proxyIP;
                            break; // 找到匹配项，跳出循环
                        }
                    }

                    if (foundProxyIP) {
                        // 如果找到匹配的proxyIP，赋值给path
                        path = `/proxyIP=${foundProxyIP}`;
                    } else {
                        // 如果没有找到匹配项，随机选择一个proxyIP
                        const randomProxyIP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];
                        path = `/proxyIP=${randomProxyIP}`;
                    }
                }

                let 伪装域名 = host;
                let 最终路径 = path;
                let 节点备注 = EndPS;
                if (proxyhosts && (host.includes('.workers.dev') || host.includes('pages.dev'))) {
                    最终路径 = `/${host}${path}`;
                    伪装域名 = proxyhosts[Math.floor(Math.random() * proxyhosts.length)];
                    节点备注 = `${EndPS} 已启用临时域名中转服务，请尽快绑定自定义域！`;
                    sni = 伪装域名;
                }
                const vlessLink = `vless://${uuid}@${address}:${port}?encryption=none&security=tls&sni=${sni}&fp=random&type=ws&host=${伪装域名}&path=${encodeURIComponent(最终路径)}#${encodeURIComponent(addressid + 节点备注)}`;

                return vlessLink;
            }).join('\n');

            let combinedContent = ''; // 合并内容

            if (link) {
                combinedContent += '\n' + link;
                console.log("link: " + link)
            }

            combinedContent += responseBody;
            if (notlsresponseBody) {
                combinedContent += '\n' + notlsresponseBody;
                console.log("notlsresponseBody: " + notlsresponseBody);
            }

            const base64Response = btoa(combinedContent); // 重新进行 Base64 编码

            const response = new Response(base64Response, {
                headers: {
                    //"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
                    "content-type": "text/plain; charset=utf-8",
                    "Profile-Update-Interval": `${SUBUpdateTime}`,
                    "Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
                },
            });

            return response;
        }
    }
};
