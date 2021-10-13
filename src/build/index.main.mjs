// Automatically generated with Reach 0.1.5
/* eslint-disable */
export const _version = '0.1.5';
export const _backendVersion = 3;


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9));
  const ctc5 = stdlib.T_Object({
    O: ctc4,
    X: ctc4,
    turn: ctc3,
    win: ctc3
    });
  
  return {
    infos: {
      "NFT": {
        owner: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v1087, v1088, v1089, v1095] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1087, v1088, v1089, v1099, v1103, v1105] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
              const [v1087, v1088, v1089, v1099, v1103, v1118] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10))) {
              const [v1087, v1088, v1089, v1099, v1121, v1136, v1144, v1300, v1302] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 12))) {
              const [v1087, v1088, v1089, v1099, v1121, v1136, v1144, v1300, v1369] = svs;
              stdlib.assert(false, 'illegal view')
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          },
        url: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v1087, v1088, v1089, v1095] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1087, v1088, v1089, v1099, v1103, v1105] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
              const [v1087, v1088, v1089, v1099, v1103, v1118] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10))) {
              const [v1087, v1088, v1089, v1099, v1121, v1136, v1144, v1300, v1302] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 12))) {
              const [v1087, v1088, v1089, v1099, v1121, v1136, v1144, v1300, v1369] = svs;
              stdlib.assert(false, 'illegal view')
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      3: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      10: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc5, ctc1, ctc3, ctc1],
      12: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc5, ctc1, ctc3, ctc1]
      }
    };
  
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function Alice(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9));
  const ctc6 = stdlib.T_Object({
    O: ctc5,
    X: ctc5,
    turn: ctc4,
    win: ctc4
    });
  
  
  const v1083 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v1084 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v1084, v1083],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:135:7:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v1084, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v1088, v1089], secs: v1091, time: v1090, didSend: v41, from: v1087 } = txn1;
      
      sim_r.txns.push({
        amt: v1088,
        kind: 'to',
        tok: undefined
        });
      const v1095 = stdlib.add(v1090, v1089);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v1088, v1089], secs: v1091, time: v1090, didSend: v41, from: v1087 } = txn1;
  ;
  const v1095 = stdlib.add(v1090, v1089);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v1095],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v1087, v1088, v1089, v1095],
      evt_cnt: 0,
      funcNum: 2,
      lct: v1090,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v1747, time: v1746, didSend: v1054, from: v1745 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v1749 = stdlib.addressEq(v1087, v1745);
        stdlib.assert(v1749, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:142:52:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        sim_r.txns.push({
          amt: v1088,
          kind: 'from',
          to: v1087,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1747, time: v1746, didSend: v1054, from: v1745 } = txn3;
    ;
    const v1749 = stdlib.addressEq(v1087, v1745);
    stdlib.assert(v1749, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:142:52:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:129:31:application',
      fs: ['at ./index.rsh:128:11:application call to [unknown function] (defined at: ./index.rsh:128:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:127:30:function exp)', 'at ./index.rsh:142:52:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    }
  else {
    const {data: [], secs: v1101, time: v1100, didSend: v50, from: v1099 } = txn2;
    const v1103 = stdlib.add(v1088, v1088);
    ;
    const v1105 = stdlib.add(v1100, v1089);
    const v1109 = stdlib.protect(ctc0, await interact.getId(), {
      at: './index.rsh:146:43:application',
      fs: ['at ./index.rsh:145:11:application call to [unknown function] (defined at: ./index.rsh:145:15:function exp)'],
      msg: 'getId',
      who: 'Alice'
      });
    const v1110 = stdlib.protect(ctc1, await interact.getUrl(), {
      at: './index.rsh:147:45:application',
      fs: ['at ./index.rsh:145:11:application call to [unknown function] (defined at: ./index.rsh:145:15:function exp)'],
      msg: 'getUrl',
      who: 'Alice'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v1087, v1088, v1089, v1099, v1103, v1105, v1109],
      evt_cnt: 1,
      funcNum: 3,
      lct: v1100,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v1112], secs: v1114, time: v1113, didSend: v62, from: v1111 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v1116 = stdlib.addressEq(v1087, v1111);
        stdlib.assert(v1116, {
          at: './index.rsh:149:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v1118 = stdlib.add(v1113, v1089);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v1105],
      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v1087, v1088, v1089, v1099, v1103, v1105],
        evt_cnt: 0,
        funcNum: 4,
        lct: v1100,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v1730, time: v1729, didSend: v1028, from: v1728 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v1732 = stdlib.addressEq(v1087, v1728);
          stdlib.assert(v1732, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:150:51:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          sim_r.txns.push({
            amt: v1103,
            kind: 'from',
            to: v1087,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1730, time: v1729, didSend: v1028, from: v1728 } = txn4;
      ;
      const v1732 = stdlib.addressEq(v1087, v1728);
      stdlib.assert(v1732, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:150:51:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:129:31:application',
        fs: ['at ./index.rsh:128:11:application call to [unknown function] (defined at: ./index.rsh:128:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:127:30:function exp)', 'at ./index.rsh:150:51:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      }
    else {
      const {data: [v1112], secs: v1114, time: v1113, didSend: v62, from: v1111 } = txn3;
      ;
      const v1116 = stdlib.addressEq(v1087, v1111);
      stdlib.assert(v1116, {
        at: './index.rsh:149:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v1118 = stdlib.add(v1113, v1089);
      const txn4 = await (ctc.sendrecv({
        args: [v1087, v1088, v1089, v1099, v1103, v1118, v1110],
        evt_cnt: 1,
        funcNum: 5,
        lct: v1113,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [v1121], secs: v1123, time: v1122, didSend: v69, from: v1120 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v1125 = stdlib.addressEq(v1087, v1120);
          stdlib.assert(v1125, {
            at: './index.rsh:152:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          
          const v1133 = [false, false, false, false, false, false, false, false, false];
          const v1134 = [false, false, false, false, false, false, false, false, false];
          const v1135 = {
            O: v1133,
            X: v1134,
            turn: true,
            win: false
            };
          const v1136 = v1135;
          const v1137 = v1122;
          const v1144 = v1103;
          
          if ((() => {
            const v1148 = v1136.O;
            const v1149 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
            const v1150 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
            const v1151 = v1149 ? v1150 : false;
            const v1152 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
            const v1153 = v1151 ? v1152 : false;
            const v1154 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
            const v1155 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
            const v1156 = v1154 ? v1155 : false;
            const v1157 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
            const v1158 = v1156 ? v1157 : false;
            const v1159 = v1153 ? true : v1158;
            const v1160 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
            const v1161 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
            const v1162 = v1160 ? v1161 : false;
            const v1163 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
            const v1164 = v1162 ? v1163 : false;
            const v1165 = v1159 ? true : v1164;
            const v1168 = v1149 ? v1154 : false;
            const v1170 = v1168 ? v1160 : false;
            const v1171 = v1165 ? true : v1170;
            const v1174 = v1150 ? v1155 : false;
            const v1176 = v1174 ? v1161 : false;
            const v1177 = v1171 ? true : v1176;
            const v1180 = v1152 ? v1157 : false;
            const v1182 = v1180 ? v1163 : false;
            const v1183 = v1177 ? true : v1182;
            const v1186 = v1149 ? v1155 : false;
            const v1188 = v1186 ? v1163 : false;
            const v1189 = v1183 ? true : v1188;
            const v1192 = v1152 ? v1155 : false;
            const v1194 = v1192 ? v1160 : false;
            const v1195 = v1189 ? true : v1194;
            const v1196 = v1136.X;
            const v1197 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
            const v1198 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
            const v1199 = v1197 ? v1198 : false;
            const v1200 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
            const v1201 = v1199 ? v1200 : false;
            const v1202 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
            const v1203 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
            const v1204 = v1202 ? v1203 : false;
            const v1205 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
            const v1206 = v1204 ? v1205 : false;
            const v1207 = v1201 ? true : v1206;
            const v1208 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
            const v1209 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
            const v1210 = v1208 ? v1209 : false;
            const v1211 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
            const v1212 = v1210 ? v1211 : false;
            const v1213 = v1207 ? true : v1212;
            const v1216 = v1197 ? v1202 : false;
            const v1218 = v1216 ? v1208 : false;
            const v1219 = v1213 ? true : v1218;
            const v1222 = v1198 ? v1203 : false;
            const v1224 = v1222 ? v1209 : false;
            const v1225 = v1219 ? true : v1224;
            const v1228 = v1200 ? v1205 : false;
            const v1230 = v1228 ? v1211 : false;
            const v1231 = v1225 ? true : v1230;
            const v1234 = v1197 ? v1203 : false;
            const v1236 = v1234 ? v1211 : false;
            const v1237 = v1231 ? true : v1236;
            const v1240 = v1200 ? v1203 : false;
            const v1242 = v1240 ? v1208 : false;
            const v1243 = v1237 ? true : v1242;
            const v1244 = v1195 ? true : v1243;
            const v1249 = v1197 ? true : v1149;
            const v1254 = v1198 ? true : v1150;
            const v1255 = v1249 ? v1254 : false;
            const v1260 = v1200 ? true : v1152;
            const v1261 = v1255 ? v1260 : false;
            const v1266 = v1202 ? true : v1154;
            const v1267 = v1261 ? v1266 : false;
            const v1272 = v1203 ? true : v1155;
            const v1273 = v1267 ? v1272 : false;
            const v1278 = v1205 ? true : v1157;
            const v1279 = v1273 ? v1278 : false;
            const v1284 = v1208 ? true : v1160;
            const v1285 = v1279 ? v1284 : false;
            const v1290 = v1209 ? true : v1161;
            const v1291 = v1285 ? v1290 : false;
            const v1296 = v1211 ? true : v1163;
            const v1297 = v1291 ? v1296 : false;
            const v1298 = v1244 ? true : v1297;
            const v1299 = v1298 ? false : true;
            
            return v1299;})()) {
            const v1300 = v1136.turn;
            if (v1300) {
              const v1302 = stdlib.add(v1137, v1089);
              sim_r.isHalt = false;
              }
            else {
              const v1369 = stdlib.add(v1137, v1089);
              sim_r.isHalt = false;
              }}
          else {
            const v1435 = v1136.X;
            const v1436 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
            const v1437 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
            const v1438 = v1436 ? v1437 : false;
            const v1439 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
            const v1440 = v1438 ? v1439 : false;
            const v1441 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
            const v1442 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
            const v1443 = v1441 ? v1442 : false;
            const v1444 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
            const v1445 = v1443 ? v1444 : false;
            const v1446 = v1440 ? true : v1445;
            const v1447 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
            const v1448 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
            const v1449 = v1447 ? v1448 : false;
            const v1450 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
            const v1451 = v1449 ? v1450 : false;
            const v1452 = v1446 ? true : v1451;
            const v1455 = v1436 ? v1441 : false;
            const v1457 = v1455 ? v1447 : false;
            const v1458 = v1452 ? true : v1457;
            const v1461 = v1437 ? v1442 : false;
            const v1463 = v1461 ? v1448 : false;
            const v1464 = v1458 ? true : v1463;
            const v1467 = v1439 ? v1444 : false;
            const v1469 = v1467 ? v1450 : false;
            const v1470 = v1464 ? true : v1469;
            const v1473 = v1436 ? v1442 : false;
            const v1475 = v1473 ? v1450 : false;
            const v1476 = v1470 ? true : v1475;
            const v1479 = v1439 ? v1442 : false;
            const v1481 = v1479 ? v1447 : false;
            const v1482 = v1476 ? true : v1481;
            const v1483 = v1136.O;
            const v1484 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
            const v1485 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
            const v1486 = v1484 ? v1485 : false;
            const v1487 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
            const v1488 = v1486 ? v1487 : false;
            const v1489 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
            const v1490 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
            const v1491 = v1489 ? v1490 : false;
            const v1492 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
            const v1493 = v1491 ? v1492 : false;
            const v1494 = v1488 ? true : v1493;
            const v1495 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
            const v1496 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
            const v1497 = v1495 ? v1496 : false;
            const v1498 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
            const v1499 = v1497 ? v1498 : false;
            const v1500 = v1494 ? true : v1499;
            const v1503 = v1484 ? v1489 : false;
            const v1505 = v1503 ? v1495 : false;
            const v1506 = v1500 ? true : v1505;
            const v1509 = v1485 ? v1490 : false;
            const v1511 = v1509 ? v1496 : false;
            const v1512 = v1506 ? true : v1511;
            const v1515 = v1487 ? v1492 : false;
            const v1517 = v1515 ? v1498 : false;
            const v1518 = v1512 ? true : v1517;
            const v1521 = v1484 ? v1490 : false;
            const v1523 = v1521 ? v1498 : false;
            const v1524 = v1518 ? true : v1523;
            const v1527 = v1487 ? v1490 : false;
            const v1529 = v1527 ? v1495 : false;
            const v1530 = v1524 ? true : v1529;
            const v1531 = [stdlib.checkedBigNumberify('./index.rsh:184:35:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:184:38:decimal', stdlib.UInt_max, 2)];
            const v1532 = [stdlib.checkedBigNumberify('./index.rsh:185:15:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:185:18:decimal', stdlib.UInt_max, 1)];
            const v1533 = v1530 ? v1531 : v1532;
            const v1534 = [stdlib.checkedBigNumberify('./index.rsh:183:33:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:183:36:decimal', stdlib.UInt_max, 0)];
            const v1535 = v1482 ? v1534 : v1533;
            const v1536 = v1535[stdlib.checkedBigNumberify('./index.rsh:182:11:array', stdlib.UInt_max, 0)];
            const v1537 = v1535[stdlib.checkedBigNumberify('./index.rsh:182:11:array', stdlib.UInt_max, 1)];
            const v1586 = v1482 ? v1087 : v1099;
            const v1587 = stdlib.mul(v1536, v1088);
            sim_r.txns.push({
              amt: v1587,
              kind: 'from',
              to: v1087,
              tok: undefined
              });
            const v1592 = stdlib.mul(v1537, v1088);
            sim_r.txns.push({
              amt: v1592,
              kind: 'from',
              to: v1099,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v1118],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v1087, v1088, v1089, v1099, v1103, v1118],
          evt_cnt: 0,
          funcNum: 6,
          lct: v1113,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v1713, time: v1712, didSend: v1002, from: v1711 } = txn5;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v1715 = stdlib.addressEq(v1087, v1711);
            stdlib.assert(v1715, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:153:51:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            sim_r.txns.push({
              amt: v1103,
              kind: 'from',
              to: v1087,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1713, time: v1712, didSend: v1002, from: v1711 } = txn5;
        ;
        const v1715 = stdlib.addressEq(v1087, v1711);
        stdlib.assert(v1715, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:153:51:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:129:31:application',
          fs: ['at ./index.rsh:128:11:application call to [unknown function] (defined at: ./index.rsh:128:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:127:30:function exp)', 'at ./index.rsh:153:51:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        }
      else {
        const {data: [v1121], secs: v1123, time: v1122, didSend: v69, from: v1120 } = txn4;
        ;
        const v1125 = stdlib.addressEq(v1087, v1120);
        stdlib.assert(v1125, {
          at: './index.rsh:152:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        stdlib.protect(ctc2, await interact.preview(v1112, v1121), {
          at: './index.rsh:155:23:application',
          fs: ['at ./index.rsh:154:9:application call to [unknown function] (defined at: ./index.rsh:154:21:function exp)'],
          msg: 'preview',
          who: 'Alice'
          });
        
        const v1133 = [false, false, false, false, false, false, false, false, false];
        const v1134 = [false, false, false, false, false, false, false, false, false];
        const v1135 = {
          O: v1133,
          X: v1134,
          turn: true,
          win: false
          };
        let v1136 = v1135;
        let v1137 = v1122;
        let v1144 = v1103;
        
        while ((() => {
          const v1148 = v1136.O;
          const v1149 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
          const v1150 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
          const v1151 = v1149 ? v1150 : false;
          const v1152 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
          const v1153 = v1151 ? v1152 : false;
          const v1154 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
          const v1155 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
          const v1156 = v1154 ? v1155 : false;
          const v1157 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
          const v1158 = v1156 ? v1157 : false;
          const v1159 = v1153 ? true : v1158;
          const v1160 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
          const v1161 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
          const v1162 = v1160 ? v1161 : false;
          const v1163 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
          const v1164 = v1162 ? v1163 : false;
          const v1165 = v1159 ? true : v1164;
          const v1168 = v1149 ? v1154 : false;
          const v1170 = v1168 ? v1160 : false;
          const v1171 = v1165 ? true : v1170;
          const v1174 = v1150 ? v1155 : false;
          const v1176 = v1174 ? v1161 : false;
          const v1177 = v1171 ? true : v1176;
          const v1180 = v1152 ? v1157 : false;
          const v1182 = v1180 ? v1163 : false;
          const v1183 = v1177 ? true : v1182;
          const v1186 = v1149 ? v1155 : false;
          const v1188 = v1186 ? v1163 : false;
          const v1189 = v1183 ? true : v1188;
          const v1192 = v1152 ? v1155 : false;
          const v1194 = v1192 ? v1160 : false;
          const v1195 = v1189 ? true : v1194;
          const v1196 = v1136.X;
          const v1197 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
          const v1198 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
          const v1199 = v1197 ? v1198 : false;
          const v1200 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
          const v1201 = v1199 ? v1200 : false;
          const v1202 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
          const v1203 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
          const v1204 = v1202 ? v1203 : false;
          const v1205 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
          const v1206 = v1204 ? v1205 : false;
          const v1207 = v1201 ? true : v1206;
          const v1208 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
          const v1209 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
          const v1210 = v1208 ? v1209 : false;
          const v1211 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
          const v1212 = v1210 ? v1211 : false;
          const v1213 = v1207 ? true : v1212;
          const v1216 = v1197 ? v1202 : false;
          const v1218 = v1216 ? v1208 : false;
          const v1219 = v1213 ? true : v1218;
          const v1222 = v1198 ? v1203 : false;
          const v1224 = v1222 ? v1209 : false;
          const v1225 = v1219 ? true : v1224;
          const v1228 = v1200 ? v1205 : false;
          const v1230 = v1228 ? v1211 : false;
          const v1231 = v1225 ? true : v1230;
          const v1234 = v1197 ? v1203 : false;
          const v1236 = v1234 ? v1211 : false;
          const v1237 = v1231 ? true : v1236;
          const v1240 = v1200 ? v1203 : false;
          const v1242 = v1240 ? v1208 : false;
          const v1243 = v1237 ? true : v1242;
          const v1244 = v1195 ? true : v1243;
          const v1249 = v1197 ? true : v1149;
          const v1254 = v1198 ? true : v1150;
          const v1255 = v1249 ? v1254 : false;
          const v1260 = v1200 ? true : v1152;
          const v1261 = v1255 ? v1260 : false;
          const v1266 = v1202 ? true : v1154;
          const v1267 = v1261 ? v1266 : false;
          const v1272 = v1203 ? true : v1155;
          const v1273 = v1267 ? v1272 : false;
          const v1278 = v1205 ? true : v1157;
          const v1279 = v1273 ? v1278 : false;
          const v1284 = v1208 ? true : v1160;
          const v1285 = v1279 ? v1284 : false;
          const v1290 = v1209 ? true : v1161;
          const v1291 = v1285 ? v1290 : false;
          const v1296 = v1211 ? true : v1163;
          const v1297 = v1291 ? v1296 : false;
          const v1298 = v1244 ? true : v1297;
          const v1299 = v1298 ? false : true;
          
          return v1299;})()) {
          const v1300 = v1136.turn;
          if (v1300) {
            const v1302 = stdlib.add(v1137, v1089);
            const v1306 = stdlib.protect(ctc0, await interact.getStep(v1136), {
              at: './index.rsh:29:32:application',
              fs: ['at ./index.rsh:164:37:application call to "getValidPlay" (defined at: ./index.rsh:28:1:function exp)', 'at ./index.rsh:163:15:application call to [unknown function] (defined at: ./index.rsh:163:19:function exp)'],
              msg: 'getStep',
              who: 'Alice'
              });
            const v1307 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:26:30:decimal', stdlib.UInt_max, 0), v1306);
            const v1308 = stdlib.lt(v1306, stdlib.checkedBigNumberify('./index.rsh:5:20:application', stdlib.UInt_max, 9));
            const v1309 = v1307 ? v1308 : false;
            stdlib.assert(v1309, {
              at: './index.rsh:30:9:application',
              fs: ['at ./index.rsh:164:37:application call to "getValidPlay" (defined at: ./index.rsh:28:1:function exp)', 'at ./index.rsh:163:15:application call to [unknown function] (defined at: ./index.rsh:163:19:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v1310 = v1136.X;
            const v1312 = v1310[v1306];
            let v1313;
            if (v1312) {
              v1313 = true;
              }
            else {
              const v1314 = v1136.O;
              const v1316 = v1314[v1306];
              v1313 = v1316;
              }
            const v1317 = v1313 ? false : true;
            stdlib.assert(v1317, {
              at: './index.rsh:31:9:application',
              fs: ['at ./index.rsh:164:37:application call to "getValidPlay" (defined at: ./index.rsh:28:1:function exp)', 'at ./index.rsh:163:15:application call to [unknown function] (defined at: ./index.rsh:163:19:function exp)'],
              msg: null,
              who: 'Alice'
              });
            
            const txn5 = await (ctc.sendrecv({
              args: [v1087, v1088, v1089, v1099, v1121, v1136, v1144, v1300, v1302, v1306],
              evt_cnt: 1,
              funcNum: 9,
              lct: v1137,
              onlyIf: true,
              out_tys: [ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn5) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [v1319], secs: v1321, time: v1320, didSend: v362, from: v1318 } = txn5;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v1323 = stdlib.addressEq(v1087, v1318);
                stdlib.assert(v1323, {
                  at: './index.rsh:165:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                const v1324 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:26:30:decimal', stdlib.UInt_max, 0), v1319);
                const v1325 = stdlib.lt(v1319, stdlib.checkedBigNumberify('./index.rsh:5:20:application', stdlib.UInt_max, 9));
                const v1326 = v1324 ? v1325 : false;
                stdlib.assert(v1326, {
                  at: './index.rsh:36:10:application',
                  fs: ['at ./index.rsh:168:21:application call to "step" (defined at: ./index.rsh:35:1:function exp)'],
                  msg: null,
                  who: 'Alice'
                  });
                const v1327 = v1136.X;
                const v1329 = v1327[v1319];
                let v1330;
                if (v1329) {
                  v1330 = true;
                  }
                else {
                  const v1331 = v1136.O;
                  const v1333 = v1331[v1319];
                  v1330 = v1333;
                  }
                const v1334 = v1330 ? false : true;
                stdlib.assert(v1334, {
                  at: './index.rsh:37:10:application',
                  fs: ['at ./index.rsh:168:21:application call to "step" (defined at: ./index.rsh:35:1:function exp)'],
                  msg: null,
                  who: 'Alice'
                  });
                const v1336 = v1300 ? false : true;
                let v1338;
                if (v1300) {
                  const v1341 = stdlib.Array_set(v1327, v1319, true);
                  v1338 = v1341;
                  }
                else {
                  v1338 = v1327;
                  }
                let v1344;
                if (v1300) {
                  const v1345 = v1136.O;
                  v1344 = v1345;
                  }
                else {
                  const v1346 = v1136.O;
                  const v1348 = stdlib.Array_set(v1346, v1319, true);
                  v1344 = v1348;
                  }
                const v1350 = {
                  O: v1344,
                  X: v1338,
                  turn: v1336,
                  win: false
                  };
                const cv1136 = v1350;
                const cv1137 = v1320;
                const cv1144 = v1144;
                
                (() => {
                  const v1136 = cv1136;
                  const v1137 = cv1137;
                  const v1144 = cv1144;
                  
                  if ((() => {
                    const v1148 = v1136.O;
                    const v1149 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
                    const v1150 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
                    const v1151 = v1149 ? v1150 : false;
                    const v1152 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
                    const v1153 = v1151 ? v1152 : false;
                    const v1154 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
                    const v1155 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
                    const v1156 = v1154 ? v1155 : false;
                    const v1157 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
                    const v1158 = v1156 ? v1157 : false;
                    const v1159 = v1153 ? true : v1158;
                    const v1160 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
                    const v1161 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
                    const v1162 = v1160 ? v1161 : false;
                    const v1163 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
                    const v1164 = v1162 ? v1163 : false;
                    const v1165 = v1159 ? true : v1164;
                    const v1168 = v1149 ? v1154 : false;
                    const v1170 = v1168 ? v1160 : false;
                    const v1171 = v1165 ? true : v1170;
                    const v1174 = v1150 ? v1155 : false;
                    const v1176 = v1174 ? v1161 : false;
                    const v1177 = v1171 ? true : v1176;
                    const v1180 = v1152 ? v1157 : false;
                    const v1182 = v1180 ? v1163 : false;
                    const v1183 = v1177 ? true : v1182;
                    const v1186 = v1149 ? v1155 : false;
                    const v1188 = v1186 ? v1163 : false;
                    const v1189 = v1183 ? true : v1188;
                    const v1192 = v1152 ? v1155 : false;
                    const v1194 = v1192 ? v1160 : false;
                    const v1195 = v1189 ? true : v1194;
                    const v1196 = v1136.X;
                    const v1197 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
                    const v1198 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
                    const v1199 = v1197 ? v1198 : false;
                    const v1200 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
                    const v1201 = v1199 ? v1200 : false;
                    const v1202 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
                    const v1203 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
                    const v1204 = v1202 ? v1203 : false;
                    const v1205 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
                    const v1206 = v1204 ? v1205 : false;
                    const v1207 = v1201 ? true : v1206;
                    const v1208 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
                    const v1209 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
                    const v1210 = v1208 ? v1209 : false;
                    const v1211 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
                    const v1212 = v1210 ? v1211 : false;
                    const v1213 = v1207 ? true : v1212;
                    const v1216 = v1197 ? v1202 : false;
                    const v1218 = v1216 ? v1208 : false;
                    const v1219 = v1213 ? true : v1218;
                    const v1222 = v1198 ? v1203 : false;
                    const v1224 = v1222 ? v1209 : false;
                    const v1225 = v1219 ? true : v1224;
                    const v1228 = v1200 ? v1205 : false;
                    const v1230 = v1228 ? v1211 : false;
                    const v1231 = v1225 ? true : v1230;
                    const v1234 = v1197 ? v1203 : false;
                    const v1236 = v1234 ? v1211 : false;
                    const v1237 = v1231 ? true : v1236;
                    const v1240 = v1200 ? v1203 : false;
                    const v1242 = v1240 ? v1208 : false;
                    const v1243 = v1237 ? true : v1242;
                    const v1244 = v1195 ? true : v1243;
                    const v1249 = v1197 ? true : v1149;
                    const v1254 = v1198 ? true : v1150;
                    const v1255 = v1249 ? v1254 : false;
                    const v1260 = v1200 ? true : v1152;
                    const v1261 = v1255 ? v1260 : false;
                    const v1266 = v1202 ? true : v1154;
                    const v1267 = v1261 ? v1266 : false;
                    const v1272 = v1203 ? true : v1155;
                    const v1273 = v1267 ? v1272 : false;
                    const v1278 = v1205 ? true : v1157;
                    const v1279 = v1273 ? v1278 : false;
                    const v1284 = v1208 ? true : v1160;
                    const v1285 = v1279 ? v1284 : false;
                    const v1290 = v1209 ? true : v1161;
                    const v1291 = v1285 ? v1290 : false;
                    const v1296 = v1211 ? true : v1163;
                    const v1297 = v1291 ? v1296 : false;
                    const v1298 = v1244 ? true : v1297;
                    const v1299 = v1298 ? false : true;
                    
                    return v1299;})()) {
                    const v1300 = v1136.turn;
                    if (v1300) {
                      const v1302 = stdlib.add(v1137, v1089);
                      sim_r.isHalt = false;
                      }
                    else {
                      const v1369 = stdlib.add(v1137, v1089);
                      sim_r.isHalt = false;
                      }}
                  else {
                    const v1435 = v1136.X;
                    const v1436 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
                    const v1437 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
                    const v1438 = v1436 ? v1437 : false;
                    const v1439 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
                    const v1440 = v1438 ? v1439 : false;
                    const v1441 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
                    const v1442 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
                    const v1443 = v1441 ? v1442 : false;
                    const v1444 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
                    const v1445 = v1443 ? v1444 : false;
                    const v1446 = v1440 ? true : v1445;
                    const v1447 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
                    const v1448 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
                    const v1449 = v1447 ? v1448 : false;
                    const v1450 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
                    const v1451 = v1449 ? v1450 : false;
                    const v1452 = v1446 ? true : v1451;
                    const v1455 = v1436 ? v1441 : false;
                    const v1457 = v1455 ? v1447 : false;
                    const v1458 = v1452 ? true : v1457;
                    const v1461 = v1437 ? v1442 : false;
                    const v1463 = v1461 ? v1448 : false;
                    const v1464 = v1458 ? true : v1463;
                    const v1467 = v1439 ? v1444 : false;
                    const v1469 = v1467 ? v1450 : false;
                    const v1470 = v1464 ? true : v1469;
                    const v1473 = v1436 ? v1442 : false;
                    const v1475 = v1473 ? v1450 : false;
                    const v1476 = v1470 ? true : v1475;
                    const v1479 = v1439 ? v1442 : false;
                    const v1481 = v1479 ? v1447 : false;
                    const v1482 = v1476 ? true : v1481;
                    const v1483 = v1136.O;
                    const v1484 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
                    const v1485 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
                    const v1486 = v1484 ? v1485 : false;
                    const v1487 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
                    const v1488 = v1486 ? v1487 : false;
                    const v1489 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
                    const v1490 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
                    const v1491 = v1489 ? v1490 : false;
                    const v1492 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
                    const v1493 = v1491 ? v1492 : false;
                    const v1494 = v1488 ? true : v1493;
                    const v1495 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
                    const v1496 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
                    const v1497 = v1495 ? v1496 : false;
                    const v1498 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
                    const v1499 = v1497 ? v1498 : false;
                    const v1500 = v1494 ? true : v1499;
                    const v1503 = v1484 ? v1489 : false;
                    const v1505 = v1503 ? v1495 : false;
                    const v1506 = v1500 ? true : v1505;
                    const v1509 = v1485 ? v1490 : false;
                    const v1511 = v1509 ? v1496 : false;
                    const v1512 = v1506 ? true : v1511;
                    const v1515 = v1487 ? v1492 : false;
                    const v1517 = v1515 ? v1498 : false;
                    const v1518 = v1512 ? true : v1517;
                    const v1521 = v1484 ? v1490 : false;
                    const v1523 = v1521 ? v1498 : false;
                    const v1524 = v1518 ? true : v1523;
                    const v1527 = v1487 ? v1490 : false;
                    const v1529 = v1527 ? v1495 : false;
                    const v1530 = v1524 ? true : v1529;
                    const v1531 = [stdlib.checkedBigNumberify('./index.rsh:184:35:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:184:38:decimal', stdlib.UInt_max, 2)];
                    const v1532 = [stdlib.checkedBigNumberify('./index.rsh:185:15:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:185:18:decimal', stdlib.UInt_max, 1)];
                    const v1533 = v1530 ? v1531 : v1532;
                    const v1534 = [stdlib.checkedBigNumberify('./index.rsh:183:33:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:183:36:decimal', stdlib.UInt_max, 0)];
                    const v1535 = v1482 ? v1534 : v1533;
                    const v1536 = v1535[stdlib.checkedBigNumberify('./index.rsh:182:11:array', stdlib.UInt_max, 0)];
                    const v1537 = v1535[stdlib.checkedBigNumberify('./index.rsh:182:11:array', stdlib.UInt_max, 1)];
                    const v1586 = v1482 ? v1087 : v1099;
                    const v1587 = stdlib.mul(v1536, v1088);
                    sim_r.txns.push({
                      amt: v1587,
                      kind: 'from',
                      to: v1087,
                      tok: undefined
                      });
                    const v1592 = stdlib.mul(v1537, v1088);
                    sim_r.txns.push({
                      amt: v1592,
                      kind: 'from',
                      to: v1099,
                      tok: undefined
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v1302],
              tys: [ctc3, ctc0, ctc0, ctc3, ctc1, ctc6, ctc0, ctc4, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn5.didTimeout) {
              const txn6 = await (ctc.recv({
                didSend: false,
                evt_cnt: 0,
                funcNum: 10,
                out_tys: [],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const {data: [], secs: v1353, time: v1352, didSend: v407, from: v1351 } = txn6;
              ;
              const v1355 = stdlib.addressEq(v1099, v1351);
              stdlib.assert(v1355, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:166:56:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc2, await interact.informTimeout(), {
                at: './index.rsh:129:31:application',
                fs: ['at ./index.rsh:128:11:application call to [unknown function] (defined at: ./index.rsh:128:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:127:30:function exp)', 'at ./index.rsh:166:56:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              }
            else {
              const {data: [v1319], secs: v1321, time: v1320, didSend: v362, from: v1318 } = txn5;
              ;
              const v1323 = stdlib.addressEq(v1087, v1318);
              stdlib.assert(v1323, {
                at: './index.rsh:165:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v1324 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:26:30:decimal', stdlib.UInt_max, 0), v1319);
              const v1325 = stdlib.lt(v1319, stdlib.checkedBigNumberify('./index.rsh:5:20:application', stdlib.UInt_max, 9));
              const v1326 = v1324 ? v1325 : false;
              stdlib.assert(v1326, {
                at: './index.rsh:36:10:application',
                fs: ['at ./index.rsh:168:21:application call to "step" (defined at: ./index.rsh:35:1:function exp)'],
                msg: null,
                who: 'Alice'
                });
              const v1327 = v1136.X;
              const v1329 = v1327[v1319];
              let v1330;
              if (v1329) {
                v1330 = true;
                }
              else {
                const v1331 = v1136.O;
                const v1333 = v1331[v1319];
                v1330 = v1333;
                }
              const v1334 = v1330 ? false : true;
              stdlib.assert(v1334, {
                at: './index.rsh:37:10:application',
                fs: ['at ./index.rsh:168:21:application call to "step" (defined at: ./index.rsh:35:1:function exp)'],
                msg: null,
                who: 'Alice'
                });
              const v1336 = v1300 ? false : true;
              let v1338;
              if (v1300) {
                const v1341 = stdlib.Array_set(v1327, v1319, true);
                v1338 = v1341;
                }
              else {
                v1338 = v1327;
                }
              let v1344;
              if (v1300) {
                const v1345 = v1136.O;
                v1344 = v1345;
                }
              else {
                const v1346 = v1136.O;
                const v1348 = stdlib.Array_set(v1346, v1319, true);
                v1344 = v1348;
                }
              const v1350 = {
                O: v1344,
                X: v1338,
                turn: v1336,
                win: false
                };
              const cv1136 = v1350;
              const cv1137 = v1320;
              const cv1144 = v1144;
              
              v1136 = cv1136;
              v1137 = cv1137;
              v1144 = cv1144;
              
              continue;}
            }
          else {
            const v1369 = stdlib.add(v1137, v1089);
            const txn5 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 11,
              out_tys: [ctc0],
              timeoutAt: ['time', v1369],
              waitIfNotPresent: false
              }));
            if (txn5.didTimeout) {
              const txn6 = await (ctc.sendrecv({
                args: [v1087, v1088, v1089, v1099, v1121, v1136, v1144, v1300, v1369],
                evt_cnt: 0,
                funcNum: 12,
                lct: v1137,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn6) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const {data: [], secs: v1420, time: v1419, didSend: v493, from: v1418 } = txn6;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v1422 = stdlib.addressEq(v1087, v1418);
                  stdlib.assert(v1422, {
                    at: 'reach standard library:209:7:dot',
                    fs: ['at ./index.rsh:176:56:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  sim_r.txns.push({
                    amt: v1144,
                    kind: 'from',
                    to: v1087,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: undefined,
                tys: [ctc3, ctc0, ctc0, ctc3, ctc1, ctc6, ctc0, ctc4, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v1420, time: v1419, didSend: v493, from: v1418 } = txn6;
              ;
              const v1422 = stdlib.addressEq(v1087, v1418);
              stdlib.assert(v1422, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:176:56:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc2, await interact.informTimeout(), {
                at: './index.rsh:129:31:application',
                fs: ['at ./index.rsh:128:11:application call to [unknown function] (defined at: ./index.rsh:128:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:127:30:function exp)', 'at ./index.rsh:176:56:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              }
            else {
              const {data: [v1386], secs: v1388, time: v1387, didSend: v448, from: v1385 } = txn5;
              ;
              const v1390 = stdlib.addressEq(v1099, v1385);
              stdlib.assert(v1390, {
                at: './index.rsh:175:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v1391 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:26:30:decimal', stdlib.UInt_max, 0), v1386);
              const v1392 = stdlib.lt(v1386, stdlib.checkedBigNumberify('./index.rsh:5:20:application', stdlib.UInt_max, 9));
              const v1393 = v1391 ? v1392 : false;
              stdlib.assert(v1393, {
                at: './index.rsh:36:10:application',
                fs: ['at ./index.rsh:178:21:application call to "step" (defined at: ./index.rsh:35:1:function exp)'],
                msg: null,
                who: 'Alice'
                });
              const v1394 = v1136.X;
              const v1396 = v1394[v1386];
              let v1397;
              if (v1396) {
                v1397 = true;
                }
              else {
                const v1398 = v1136.O;
                const v1400 = v1398[v1386];
                v1397 = v1400;
                }
              const v1401 = v1397 ? false : true;
              stdlib.assert(v1401, {
                at: './index.rsh:37:10:application',
                fs: ['at ./index.rsh:178:21:application call to "step" (defined at: ./index.rsh:35:1:function exp)'],
                msg: null,
                who: 'Alice'
                });
              const v1403 = v1300 ? false : true;
              let v1405;
              if (v1300) {
                const v1408 = stdlib.Array_set(v1394, v1386, true);
                v1405 = v1408;
                }
              else {
                v1405 = v1394;
                }
              let v1411;
              if (v1300) {
                const v1412 = v1136.O;
                v1411 = v1412;
                }
              else {
                const v1413 = v1136.O;
                const v1415 = stdlib.Array_set(v1413, v1386, true);
                v1411 = v1415;
                }
              const v1417 = {
                O: v1411,
                X: v1405,
                turn: v1403,
                win: false
                };
              const cv1136 = v1417;
              const cv1137 = v1387;
              const cv1144 = v1144;
              
              v1136 = cv1136;
              v1137 = cv1137;
              v1144 = cv1144;
              
              continue;}
            }}
        const v1435 = v1136.X;
        const v1436 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
        const v1437 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
        const v1438 = v1436 ? v1437 : false;
        const v1439 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
        const v1440 = v1438 ? v1439 : false;
        const v1441 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
        const v1442 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
        const v1443 = v1441 ? v1442 : false;
        const v1444 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
        const v1445 = v1443 ? v1444 : false;
        const v1446 = v1440 ? true : v1445;
        const v1447 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
        const v1448 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
        const v1449 = v1447 ? v1448 : false;
        const v1450 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
        const v1451 = v1449 ? v1450 : false;
        const v1452 = v1446 ? true : v1451;
        const v1455 = v1436 ? v1441 : false;
        const v1457 = v1455 ? v1447 : false;
        const v1458 = v1452 ? true : v1457;
        const v1461 = v1437 ? v1442 : false;
        const v1463 = v1461 ? v1448 : false;
        const v1464 = v1458 ? true : v1463;
        const v1467 = v1439 ? v1444 : false;
        const v1469 = v1467 ? v1450 : false;
        const v1470 = v1464 ? true : v1469;
        const v1473 = v1436 ? v1442 : false;
        const v1475 = v1473 ? v1450 : false;
        const v1476 = v1470 ? true : v1475;
        const v1479 = v1439 ? v1442 : false;
        const v1481 = v1479 ? v1447 : false;
        const v1482 = v1476 ? true : v1481;
        const v1483 = v1136.O;
        const v1484 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
        const v1485 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
        const v1486 = v1484 ? v1485 : false;
        const v1487 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
        const v1488 = v1486 ? v1487 : false;
        const v1489 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
        const v1490 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
        const v1491 = v1489 ? v1490 : false;
        const v1492 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
        const v1493 = v1491 ? v1492 : false;
        const v1494 = v1488 ? true : v1493;
        const v1495 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
        const v1496 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
        const v1497 = v1495 ? v1496 : false;
        const v1498 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
        const v1499 = v1497 ? v1498 : false;
        const v1500 = v1494 ? true : v1499;
        const v1503 = v1484 ? v1489 : false;
        const v1505 = v1503 ? v1495 : false;
        const v1506 = v1500 ? true : v1505;
        const v1509 = v1485 ? v1490 : false;
        const v1511 = v1509 ? v1496 : false;
        const v1512 = v1506 ? true : v1511;
        const v1515 = v1487 ? v1492 : false;
        const v1517 = v1515 ? v1498 : false;
        const v1518 = v1512 ? true : v1517;
        const v1521 = v1484 ? v1490 : false;
        const v1523 = v1521 ? v1498 : false;
        const v1524 = v1518 ? true : v1523;
        const v1527 = v1487 ? v1490 : false;
        const v1529 = v1527 ? v1495 : false;
        const v1530 = v1524 ? true : v1529;
        const v1531 = [stdlib.checkedBigNumberify('./index.rsh:184:35:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:184:38:decimal', stdlib.UInt_max, 2)];
        const v1532 = [stdlib.checkedBigNumberify('./index.rsh:185:15:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:185:18:decimal', stdlib.UInt_max, 1)];
        const v1533 = v1530 ? v1531 : v1532;
        const v1534 = [stdlib.checkedBigNumberify('./index.rsh:183:33:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:183:36:decimal', stdlib.UInt_max, 0)];
        const v1535 = v1482 ? v1534 : v1533;
        const v1536 = v1535[stdlib.checkedBigNumberify('./index.rsh:182:11:array', stdlib.UInt_max, 0)];
        const v1537 = v1535[stdlib.checkedBigNumberify('./index.rsh:182:11:array', stdlib.UInt_max, 1)];
        const v1586 = v1482 ? v1087 : v1099;
        const v1587 = stdlib.mul(v1536, v1088);
        ;
        const v1592 = stdlib.mul(v1537, v1088);
        ;
        const v1603 = v1136.turn;
        const v1654 = {
          O: v1483,
          X: v1435,
          turn: v1603,
          win: v1482
          };
        stdlib.protect(ctc2, await interact.showEnd(v1654, v1112, v1586, v1121), {
          at: './index.rsh:196:23:application',
          fs: ['at ./index.rsh:195:11:application call to [unknown function] (defined at: ./index.rsh:195:14:function exp)'],
          msg: 'showEnd',
          who: 'Alice'
          });
        
        return;}
      }
    }
  
  
  };
export async function Bob(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9));
  const ctc6 = stdlib.T_Object({
    O: ctc5,
    X: ctc5,
    turn: ctc4,
    win: ctc4
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v1088, v1089], secs: v1091, time: v1090, didSend: v41, from: v1087 } = txn1;
  ;
  const v1095 = stdlib.add(v1090, v1089);
  stdlib.protect(ctc1, await interact.acceptWager(v1088), {
    at: './index.rsh:140:27:application',
    fs: ['at ./index.rsh:139:11:application call to [unknown function] (defined at: ./index.rsh:139:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v1087, v1088, v1089, v1095],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1090,
    onlyIf: true,
    out_tys: [],
    pay: [v1088, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v1101, time: v1100, didSend: v50, from: v1099 } = txn2;
      
      const v1103 = stdlib.add(v1088, v1088);
      sim_r.txns.push({
        amt: v1088,
        kind: 'to',
        tok: undefined
        });
      const v1105 = stdlib.add(v1100, v1089);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v1095],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1747, time: v1746, didSend: v1054, from: v1745 } = txn3;
    ;
    const v1749 = stdlib.addressEq(v1087, v1745);
    stdlib.assert(v1749, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:142:52:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:129:31:application',
      fs: ['at ./index.rsh:128:11:application call to [unknown function] (defined at: ./index.rsh:128:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:127:30:function exp)', 'at ./index.rsh:142:52:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    }
  else {
    const {data: [], secs: v1101, time: v1100, didSend: v50, from: v1099 } = txn2;
    const v1103 = stdlib.add(v1088, v1088);
    ;
    const v1105 = stdlib.add(v1100, v1089);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc0],
      timeoutAt: ['time', v1105],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1730, time: v1729, didSend: v1028, from: v1728 } = txn4;
      ;
      const v1732 = stdlib.addressEq(v1087, v1728);
      stdlib.assert(v1732, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:150:51:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:129:31:application',
        fs: ['at ./index.rsh:128:11:application call to [unknown function] (defined at: ./index.rsh:128:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:127:30:function exp)', 'at ./index.rsh:150:51:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      }
    else {
      const {data: [v1112], secs: v1114, time: v1113, didSend: v62, from: v1111 } = txn3;
      ;
      const v1116 = stdlib.addressEq(v1087, v1111);
      stdlib.assert(v1116, {
        at: './index.rsh:149:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v1118 = stdlib.add(v1113, v1089);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc2],
        timeoutAt: ['time', v1118],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 6,
          out_tys: [],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1713, time: v1712, didSend: v1002, from: v1711 } = txn5;
        ;
        const v1715 = stdlib.addressEq(v1087, v1711);
        stdlib.assert(v1715, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:153:51:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:129:31:application',
          fs: ['at ./index.rsh:128:11:application call to [unknown function] (defined at: ./index.rsh:128:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:127:30:function exp)', 'at ./index.rsh:153:51:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        }
      else {
        const {data: [v1121], secs: v1123, time: v1122, didSend: v69, from: v1120 } = txn4;
        ;
        const v1125 = stdlib.addressEq(v1087, v1120);
        stdlib.assert(v1125, {
          at: './index.rsh:152:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        stdlib.protect(ctc1, await interact.preview(v1112, v1121), {
          at: './index.rsh:155:23:application',
          fs: ['at ./index.rsh:154:9:application call to [unknown function] (defined at: ./index.rsh:154:21:function exp)'],
          msg: 'preview',
          who: 'Bob'
          });
        
        const v1133 = [false, false, false, false, false, false, false, false, false];
        const v1134 = [false, false, false, false, false, false, false, false, false];
        const v1135 = {
          O: v1133,
          X: v1134,
          turn: true,
          win: false
          };
        let v1136 = v1135;
        let v1137 = v1122;
        let v1144 = v1103;
        
        while ((() => {
          const v1148 = v1136.O;
          const v1149 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
          const v1150 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
          const v1151 = v1149 ? v1150 : false;
          const v1152 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
          const v1153 = v1151 ? v1152 : false;
          const v1154 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
          const v1155 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
          const v1156 = v1154 ? v1155 : false;
          const v1157 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
          const v1158 = v1156 ? v1157 : false;
          const v1159 = v1153 ? true : v1158;
          const v1160 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
          const v1161 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
          const v1162 = v1160 ? v1161 : false;
          const v1163 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
          const v1164 = v1162 ? v1163 : false;
          const v1165 = v1159 ? true : v1164;
          const v1168 = v1149 ? v1154 : false;
          const v1170 = v1168 ? v1160 : false;
          const v1171 = v1165 ? true : v1170;
          const v1174 = v1150 ? v1155 : false;
          const v1176 = v1174 ? v1161 : false;
          const v1177 = v1171 ? true : v1176;
          const v1180 = v1152 ? v1157 : false;
          const v1182 = v1180 ? v1163 : false;
          const v1183 = v1177 ? true : v1182;
          const v1186 = v1149 ? v1155 : false;
          const v1188 = v1186 ? v1163 : false;
          const v1189 = v1183 ? true : v1188;
          const v1192 = v1152 ? v1155 : false;
          const v1194 = v1192 ? v1160 : false;
          const v1195 = v1189 ? true : v1194;
          const v1196 = v1136.X;
          const v1197 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
          const v1198 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
          const v1199 = v1197 ? v1198 : false;
          const v1200 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
          const v1201 = v1199 ? v1200 : false;
          const v1202 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
          const v1203 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
          const v1204 = v1202 ? v1203 : false;
          const v1205 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
          const v1206 = v1204 ? v1205 : false;
          const v1207 = v1201 ? true : v1206;
          const v1208 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
          const v1209 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
          const v1210 = v1208 ? v1209 : false;
          const v1211 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
          const v1212 = v1210 ? v1211 : false;
          const v1213 = v1207 ? true : v1212;
          const v1216 = v1197 ? v1202 : false;
          const v1218 = v1216 ? v1208 : false;
          const v1219 = v1213 ? true : v1218;
          const v1222 = v1198 ? v1203 : false;
          const v1224 = v1222 ? v1209 : false;
          const v1225 = v1219 ? true : v1224;
          const v1228 = v1200 ? v1205 : false;
          const v1230 = v1228 ? v1211 : false;
          const v1231 = v1225 ? true : v1230;
          const v1234 = v1197 ? v1203 : false;
          const v1236 = v1234 ? v1211 : false;
          const v1237 = v1231 ? true : v1236;
          const v1240 = v1200 ? v1203 : false;
          const v1242 = v1240 ? v1208 : false;
          const v1243 = v1237 ? true : v1242;
          const v1244 = v1195 ? true : v1243;
          const v1249 = v1197 ? true : v1149;
          const v1254 = v1198 ? true : v1150;
          const v1255 = v1249 ? v1254 : false;
          const v1260 = v1200 ? true : v1152;
          const v1261 = v1255 ? v1260 : false;
          const v1266 = v1202 ? true : v1154;
          const v1267 = v1261 ? v1266 : false;
          const v1272 = v1203 ? true : v1155;
          const v1273 = v1267 ? v1272 : false;
          const v1278 = v1205 ? true : v1157;
          const v1279 = v1273 ? v1278 : false;
          const v1284 = v1208 ? true : v1160;
          const v1285 = v1279 ? v1284 : false;
          const v1290 = v1209 ? true : v1161;
          const v1291 = v1285 ? v1290 : false;
          const v1296 = v1211 ? true : v1163;
          const v1297 = v1291 ? v1296 : false;
          const v1298 = v1244 ? true : v1297;
          const v1299 = v1298 ? false : true;
          
          return v1299;})()) {
          const v1300 = v1136.turn;
          if (v1300) {
            const v1302 = stdlib.add(v1137, v1089);
            const txn5 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 9,
              out_tys: [ctc0],
              timeoutAt: ['time', v1302],
              waitIfNotPresent: false
              }));
            if (txn5.didTimeout) {
              const txn6 = await (ctc.sendrecv({
                args: [v1087, v1088, v1089, v1099, v1121, v1136, v1144, v1300, v1302],
                evt_cnt: 0,
                funcNum: 10,
                lct: v1137,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn6) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const {data: [], secs: v1353, time: v1352, didSend: v407, from: v1351 } = txn6;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v1355 = stdlib.addressEq(v1099, v1351);
                  stdlib.assert(v1355, {
                    at: 'reach standard library:209:7:dot',
                    fs: ['at ./index.rsh:166:56:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  sim_r.txns.push({
                    amt: v1144,
                    kind: 'from',
                    to: v1099,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: undefined,
                tys: [ctc3, ctc0, ctc0, ctc3, ctc2, ctc6, ctc0, ctc4, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v1353, time: v1352, didSend: v407, from: v1351 } = txn6;
              ;
              const v1355 = stdlib.addressEq(v1099, v1351);
              stdlib.assert(v1355, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:166:56:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:129:31:application',
                fs: ['at ./index.rsh:128:11:application call to [unknown function] (defined at: ./index.rsh:128:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:127:30:function exp)', 'at ./index.rsh:166:56:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              }
            else {
              const {data: [v1319], secs: v1321, time: v1320, didSend: v362, from: v1318 } = txn5;
              ;
              const v1323 = stdlib.addressEq(v1087, v1318);
              stdlib.assert(v1323, {
                at: './index.rsh:165:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v1324 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:26:30:decimal', stdlib.UInt_max, 0), v1319);
              const v1325 = stdlib.lt(v1319, stdlib.checkedBigNumberify('./index.rsh:5:20:application', stdlib.UInt_max, 9));
              const v1326 = v1324 ? v1325 : false;
              stdlib.assert(v1326, {
                at: './index.rsh:36:10:application',
                fs: ['at ./index.rsh:168:21:application call to "step" (defined at: ./index.rsh:35:1:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v1327 = v1136.X;
              const v1329 = v1327[v1319];
              let v1330;
              if (v1329) {
                v1330 = true;
                }
              else {
                const v1331 = v1136.O;
                const v1333 = v1331[v1319];
                v1330 = v1333;
                }
              const v1334 = v1330 ? false : true;
              stdlib.assert(v1334, {
                at: './index.rsh:37:10:application',
                fs: ['at ./index.rsh:168:21:application call to "step" (defined at: ./index.rsh:35:1:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v1336 = v1300 ? false : true;
              let v1338;
              if (v1300) {
                const v1341 = stdlib.Array_set(v1327, v1319, true);
                v1338 = v1341;
                }
              else {
                v1338 = v1327;
                }
              let v1344;
              if (v1300) {
                const v1345 = v1136.O;
                v1344 = v1345;
                }
              else {
                const v1346 = v1136.O;
                const v1348 = stdlib.Array_set(v1346, v1319, true);
                v1344 = v1348;
                }
              const v1350 = {
                O: v1344,
                X: v1338,
                turn: v1336,
                win: false
                };
              const cv1136 = v1350;
              const cv1137 = v1320;
              const cv1144 = v1144;
              
              v1136 = cv1136;
              v1137 = cv1137;
              v1144 = cv1144;
              
              continue;}
            }
          else {
            const v1369 = stdlib.add(v1137, v1089);
            const v1373 = stdlib.protect(ctc0, await interact.getStep(v1136), {
              at: './index.rsh:29:32:application',
              fs: ['at ./index.rsh:174:37:application call to "getValidPlay" (defined at: ./index.rsh:28:1:function exp)', 'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:19:function exp)'],
              msg: 'getStep',
              who: 'Bob'
              });
            const v1374 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:26:30:decimal', stdlib.UInt_max, 0), v1373);
            const v1375 = stdlib.lt(v1373, stdlib.checkedBigNumberify('./index.rsh:5:20:application', stdlib.UInt_max, 9));
            const v1376 = v1374 ? v1375 : false;
            stdlib.assert(v1376, {
              at: './index.rsh:30:9:application',
              fs: ['at ./index.rsh:174:37:application call to "getValidPlay" (defined at: ./index.rsh:28:1:function exp)', 'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:19:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v1377 = v1136.X;
            const v1379 = v1377[v1373];
            let v1380;
            if (v1379) {
              v1380 = true;
              }
            else {
              const v1381 = v1136.O;
              const v1383 = v1381[v1373];
              v1380 = v1383;
              }
            const v1384 = v1380 ? false : true;
            stdlib.assert(v1384, {
              at: './index.rsh:31:9:application',
              fs: ['at ./index.rsh:174:37:application call to "getValidPlay" (defined at: ./index.rsh:28:1:function exp)', 'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:19:function exp)'],
              msg: null,
              who: 'Bob'
              });
            
            const txn5 = await (ctc.sendrecv({
              args: [v1087, v1088, v1089, v1099, v1121, v1136, v1144, v1300, v1369, v1373],
              evt_cnt: 1,
              funcNum: 11,
              lct: v1137,
              onlyIf: true,
              out_tys: [ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn5) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [v1386], secs: v1388, time: v1387, didSend: v448, from: v1385 } = txn5;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v1390 = stdlib.addressEq(v1099, v1385);
                stdlib.assert(v1390, {
                  at: './index.rsh:175:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                const v1391 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:26:30:decimal', stdlib.UInt_max, 0), v1386);
                const v1392 = stdlib.lt(v1386, stdlib.checkedBigNumberify('./index.rsh:5:20:application', stdlib.UInt_max, 9));
                const v1393 = v1391 ? v1392 : false;
                stdlib.assert(v1393, {
                  at: './index.rsh:36:10:application',
                  fs: ['at ./index.rsh:178:21:application call to "step" (defined at: ./index.rsh:35:1:function exp)'],
                  msg: null,
                  who: 'Bob'
                  });
                const v1394 = v1136.X;
                const v1396 = v1394[v1386];
                let v1397;
                if (v1396) {
                  v1397 = true;
                  }
                else {
                  const v1398 = v1136.O;
                  const v1400 = v1398[v1386];
                  v1397 = v1400;
                  }
                const v1401 = v1397 ? false : true;
                stdlib.assert(v1401, {
                  at: './index.rsh:37:10:application',
                  fs: ['at ./index.rsh:178:21:application call to "step" (defined at: ./index.rsh:35:1:function exp)'],
                  msg: null,
                  who: 'Bob'
                  });
                const v1403 = v1300 ? false : true;
                let v1405;
                if (v1300) {
                  const v1408 = stdlib.Array_set(v1394, v1386, true);
                  v1405 = v1408;
                  }
                else {
                  v1405 = v1394;
                  }
                let v1411;
                if (v1300) {
                  const v1412 = v1136.O;
                  v1411 = v1412;
                  }
                else {
                  const v1413 = v1136.O;
                  const v1415 = stdlib.Array_set(v1413, v1386, true);
                  v1411 = v1415;
                  }
                const v1417 = {
                  O: v1411,
                  X: v1405,
                  turn: v1403,
                  win: false
                  };
                const cv1136 = v1417;
                const cv1137 = v1387;
                const cv1144 = v1144;
                
                (() => {
                  const v1136 = cv1136;
                  const v1137 = cv1137;
                  const v1144 = cv1144;
                  
                  if ((() => {
                    const v1148 = v1136.O;
                    const v1149 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
                    const v1150 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
                    const v1151 = v1149 ? v1150 : false;
                    const v1152 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
                    const v1153 = v1151 ? v1152 : false;
                    const v1154 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
                    const v1155 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
                    const v1156 = v1154 ? v1155 : false;
                    const v1157 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
                    const v1158 = v1156 ? v1157 : false;
                    const v1159 = v1153 ? true : v1158;
                    const v1160 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
                    const v1161 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
                    const v1162 = v1160 ? v1161 : false;
                    const v1163 = v1148[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
                    const v1164 = v1162 ? v1163 : false;
                    const v1165 = v1159 ? true : v1164;
                    const v1168 = v1149 ? v1154 : false;
                    const v1170 = v1168 ? v1160 : false;
                    const v1171 = v1165 ? true : v1170;
                    const v1174 = v1150 ? v1155 : false;
                    const v1176 = v1174 ? v1161 : false;
                    const v1177 = v1171 ? true : v1176;
                    const v1180 = v1152 ? v1157 : false;
                    const v1182 = v1180 ? v1163 : false;
                    const v1183 = v1177 ? true : v1182;
                    const v1186 = v1149 ? v1155 : false;
                    const v1188 = v1186 ? v1163 : false;
                    const v1189 = v1183 ? true : v1188;
                    const v1192 = v1152 ? v1155 : false;
                    const v1194 = v1192 ? v1160 : false;
                    const v1195 = v1189 ? true : v1194;
                    const v1196 = v1136.X;
                    const v1197 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
                    const v1198 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
                    const v1199 = v1197 ? v1198 : false;
                    const v1200 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
                    const v1201 = v1199 ? v1200 : false;
                    const v1202 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
                    const v1203 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
                    const v1204 = v1202 ? v1203 : false;
                    const v1205 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
                    const v1206 = v1204 ? v1205 : false;
                    const v1207 = v1201 ? true : v1206;
                    const v1208 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
                    const v1209 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
                    const v1210 = v1208 ? v1209 : false;
                    const v1211 = v1196[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
                    const v1212 = v1210 ? v1211 : false;
                    const v1213 = v1207 ? true : v1212;
                    const v1216 = v1197 ? v1202 : false;
                    const v1218 = v1216 ? v1208 : false;
                    const v1219 = v1213 ? true : v1218;
                    const v1222 = v1198 ? v1203 : false;
                    const v1224 = v1222 ? v1209 : false;
                    const v1225 = v1219 ? true : v1224;
                    const v1228 = v1200 ? v1205 : false;
                    const v1230 = v1228 ? v1211 : false;
                    const v1231 = v1225 ? true : v1230;
                    const v1234 = v1197 ? v1203 : false;
                    const v1236 = v1234 ? v1211 : false;
                    const v1237 = v1231 ? true : v1236;
                    const v1240 = v1200 ? v1203 : false;
                    const v1242 = v1240 ? v1208 : false;
                    const v1243 = v1237 ? true : v1242;
                    const v1244 = v1195 ? true : v1243;
                    const v1249 = v1197 ? true : v1149;
                    const v1254 = v1198 ? true : v1150;
                    const v1255 = v1249 ? v1254 : false;
                    const v1260 = v1200 ? true : v1152;
                    const v1261 = v1255 ? v1260 : false;
                    const v1266 = v1202 ? true : v1154;
                    const v1267 = v1261 ? v1266 : false;
                    const v1272 = v1203 ? true : v1155;
                    const v1273 = v1267 ? v1272 : false;
                    const v1278 = v1205 ? true : v1157;
                    const v1279 = v1273 ? v1278 : false;
                    const v1284 = v1208 ? true : v1160;
                    const v1285 = v1279 ? v1284 : false;
                    const v1290 = v1209 ? true : v1161;
                    const v1291 = v1285 ? v1290 : false;
                    const v1296 = v1211 ? true : v1163;
                    const v1297 = v1291 ? v1296 : false;
                    const v1298 = v1244 ? true : v1297;
                    const v1299 = v1298 ? false : true;
                    
                    return v1299;})()) {
                    const v1300 = v1136.turn;
                    if (v1300) {
                      const v1302 = stdlib.add(v1137, v1089);
                      sim_r.isHalt = false;
                      }
                    else {
                      const v1369 = stdlib.add(v1137, v1089);
                      sim_r.isHalt = false;
                      }}
                  else {
                    const v1435 = v1136.X;
                    const v1436 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
                    const v1437 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
                    const v1438 = v1436 ? v1437 : false;
                    const v1439 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
                    const v1440 = v1438 ? v1439 : false;
                    const v1441 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
                    const v1442 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
                    const v1443 = v1441 ? v1442 : false;
                    const v1444 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
                    const v1445 = v1443 ? v1444 : false;
                    const v1446 = v1440 ? true : v1445;
                    const v1447 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
                    const v1448 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
                    const v1449 = v1447 ? v1448 : false;
                    const v1450 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
                    const v1451 = v1449 ? v1450 : false;
                    const v1452 = v1446 ? true : v1451;
                    const v1455 = v1436 ? v1441 : false;
                    const v1457 = v1455 ? v1447 : false;
                    const v1458 = v1452 ? true : v1457;
                    const v1461 = v1437 ? v1442 : false;
                    const v1463 = v1461 ? v1448 : false;
                    const v1464 = v1458 ? true : v1463;
                    const v1467 = v1439 ? v1444 : false;
                    const v1469 = v1467 ? v1450 : false;
                    const v1470 = v1464 ? true : v1469;
                    const v1473 = v1436 ? v1442 : false;
                    const v1475 = v1473 ? v1450 : false;
                    const v1476 = v1470 ? true : v1475;
                    const v1479 = v1439 ? v1442 : false;
                    const v1481 = v1479 ? v1447 : false;
                    const v1482 = v1476 ? true : v1481;
                    const v1483 = v1136.O;
                    const v1484 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
                    const v1485 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
                    const v1486 = v1484 ? v1485 : false;
                    const v1487 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
                    const v1488 = v1486 ? v1487 : false;
                    const v1489 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
                    const v1490 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
                    const v1491 = v1489 ? v1490 : false;
                    const v1492 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
                    const v1493 = v1491 ? v1492 : false;
                    const v1494 = v1488 ? true : v1493;
                    const v1495 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
                    const v1496 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
                    const v1497 = v1495 ? v1496 : false;
                    const v1498 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
                    const v1499 = v1497 ? v1498 : false;
                    const v1500 = v1494 ? true : v1499;
                    const v1503 = v1484 ? v1489 : false;
                    const v1505 = v1503 ? v1495 : false;
                    const v1506 = v1500 ? true : v1505;
                    const v1509 = v1485 ? v1490 : false;
                    const v1511 = v1509 ? v1496 : false;
                    const v1512 = v1506 ? true : v1511;
                    const v1515 = v1487 ? v1492 : false;
                    const v1517 = v1515 ? v1498 : false;
                    const v1518 = v1512 ? true : v1517;
                    const v1521 = v1484 ? v1490 : false;
                    const v1523 = v1521 ? v1498 : false;
                    const v1524 = v1518 ? true : v1523;
                    const v1527 = v1487 ? v1490 : false;
                    const v1529 = v1527 ? v1495 : false;
                    const v1530 = v1524 ? true : v1529;
                    const v1531 = [stdlib.checkedBigNumberify('./index.rsh:184:35:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:184:38:decimal', stdlib.UInt_max, 2)];
                    const v1532 = [stdlib.checkedBigNumberify('./index.rsh:185:15:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:185:18:decimal', stdlib.UInt_max, 1)];
                    const v1533 = v1530 ? v1531 : v1532;
                    const v1534 = [stdlib.checkedBigNumberify('./index.rsh:183:33:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:183:36:decimal', stdlib.UInt_max, 0)];
                    const v1535 = v1482 ? v1534 : v1533;
                    const v1536 = v1535[stdlib.checkedBigNumberify('./index.rsh:182:11:array', stdlib.UInt_max, 0)];
                    const v1537 = v1535[stdlib.checkedBigNumberify('./index.rsh:182:11:array', stdlib.UInt_max, 1)];
                    const v1586 = v1482 ? v1087 : v1099;
                    const v1587 = stdlib.mul(v1536, v1088);
                    sim_r.txns.push({
                      amt: v1587,
                      kind: 'from',
                      to: v1087,
                      tok: undefined
                      });
                    const v1592 = stdlib.mul(v1537, v1088);
                    sim_r.txns.push({
                      amt: v1592,
                      kind: 'from',
                      to: v1099,
                      tok: undefined
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v1369],
              tys: [ctc3, ctc0, ctc0, ctc3, ctc2, ctc6, ctc0, ctc4, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn5.didTimeout) {
              const txn6 = await (ctc.recv({
                didSend: false,
                evt_cnt: 0,
                funcNum: 12,
                out_tys: [],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const {data: [], secs: v1420, time: v1419, didSend: v493, from: v1418 } = txn6;
              ;
              const v1422 = stdlib.addressEq(v1087, v1418);
              stdlib.assert(v1422, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:176:56:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:129:31:application',
                fs: ['at ./index.rsh:128:11:application call to [unknown function] (defined at: ./index.rsh:128:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:127:30:function exp)', 'at ./index.rsh:176:56:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              }
            else {
              const {data: [v1386], secs: v1388, time: v1387, didSend: v448, from: v1385 } = txn5;
              ;
              const v1390 = stdlib.addressEq(v1099, v1385);
              stdlib.assert(v1390, {
                at: './index.rsh:175:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v1391 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:26:30:decimal', stdlib.UInt_max, 0), v1386);
              const v1392 = stdlib.lt(v1386, stdlib.checkedBigNumberify('./index.rsh:5:20:application', stdlib.UInt_max, 9));
              const v1393 = v1391 ? v1392 : false;
              stdlib.assert(v1393, {
                at: './index.rsh:36:10:application',
                fs: ['at ./index.rsh:178:21:application call to "step" (defined at: ./index.rsh:35:1:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v1394 = v1136.X;
              const v1396 = v1394[v1386];
              let v1397;
              if (v1396) {
                v1397 = true;
                }
              else {
                const v1398 = v1136.O;
                const v1400 = v1398[v1386];
                v1397 = v1400;
                }
              const v1401 = v1397 ? false : true;
              stdlib.assert(v1401, {
                at: './index.rsh:37:10:application',
                fs: ['at ./index.rsh:178:21:application call to "step" (defined at: ./index.rsh:35:1:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v1403 = v1300 ? false : true;
              let v1405;
              if (v1300) {
                const v1408 = stdlib.Array_set(v1394, v1386, true);
                v1405 = v1408;
                }
              else {
                v1405 = v1394;
                }
              let v1411;
              if (v1300) {
                const v1412 = v1136.O;
                v1411 = v1412;
                }
              else {
                const v1413 = v1136.O;
                const v1415 = stdlib.Array_set(v1413, v1386, true);
                v1411 = v1415;
                }
              const v1417 = {
                O: v1411,
                X: v1405,
                turn: v1403,
                win: false
                };
              const cv1136 = v1417;
              const cv1137 = v1387;
              const cv1144 = v1144;
              
              v1136 = cv1136;
              v1137 = cv1137;
              v1144 = cv1144;
              
              continue;}
            }}
        const v1435 = v1136.X;
        const v1436 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
        const v1437 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
        const v1438 = v1436 ? v1437 : false;
        const v1439 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
        const v1440 = v1438 ? v1439 : false;
        const v1441 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
        const v1442 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
        const v1443 = v1441 ? v1442 : false;
        const v1444 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
        const v1445 = v1443 ? v1444 : false;
        const v1446 = v1440 ? true : v1445;
        const v1447 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
        const v1448 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
        const v1449 = v1447 ? v1448 : false;
        const v1450 = v1435[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
        const v1451 = v1449 ? v1450 : false;
        const v1452 = v1446 ? true : v1451;
        const v1455 = v1436 ? v1441 : false;
        const v1457 = v1455 ? v1447 : false;
        const v1458 = v1452 ? true : v1457;
        const v1461 = v1437 ? v1442 : false;
        const v1463 = v1461 ? v1448 : false;
        const v1464 = v1458 ? true : v1463;
        const v1467 = v1439 ? v1444 : false;
        const v1469 = v1467 ? v1450 : false;
        const v1470 = v1464 ? true : v1469;
        const v1473 = v1436 ? v1442 : false;
        const v1475 = v1473 ? v1450 : false;
        const v1476 = v1470 ? true : v1475;
        const v1479 = v1439 ? v1442 : false;
        const v1481 = v1479 ? v1447 : false;
        const v1482 = v1476 ? true : v1481;
        const v1483 = v1136.O;
        const v1484 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 0)];
        const v1485 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 1)];
        const v1486 = v1484 ? v1485 : false;
        const v1487 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 2)];
        const v1488 = v1486 ? v1487 : false;
        const v1489 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 3)];
        const v1490 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 4)];
        const v1491 = v1489 ? v1490 : false;
        const v1492 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 5)];
        const v1493 = v1491 ? v1492 : false;
        const v1494 = v1488 ? true : v1493;
        const v1495 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 6)];
        const v1496 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 7)];
        const v1497 = v1495 ? v1496 : false;
        const v1498 = v1483[stdlib.checkedBigNumberify('./index.rsh:48:23:array ref', stdlib.UInt_max, 8)];
        const v1499 = v1497 ? v1498 : false;
        const v1500 = v1494 ? true : v1499;
        const v1503 = v1484 ? v1489 : false;
        const v1505 = v1503 ? v1495 : false;
        const v1506 = v1500 ? true : v1505;
        const v1509 = v1485 ? v1490 : false;
        const v1511 = v1509 ? v1496 : false;
        const v1512 = v1506 ? true : v1511;
        const v1515 = v1487 ? v1492 : false;
        const v1517 = v1515 ? v1498 : false;
        const v1518 = v1512 ? true : v1517;
        const v1521 = v1484 ? v1490 : false;
        const v1523 = v1521 ? v1498 : false;
        const v1524 = v1518 ? true : v1523;
        const v1527 = v1487 ? v1490 : false;
        const v1529 = v1527 ? v1495 : false;
        const v1530 = v1524 ? true : v1529;
        const v1531 = [stdlib.checkedBigNumberify('./index.rsh:184:35:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:184:38:decimal', stdlib.UInt_max, 2)];
        const v1532 = [stdlib.checkedBigNumberify('./index.rsh:185:15:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:185:18:decimal', stdlib.UInt_max, 1)];
        const v1533 = v1530 ? v1531 : v1532;
        const v1534 = [stdlib.checkedBigNumberify('./index.rsh:183:33:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:183:36:decimal', stdlib.UInt_max, 0)];
        const v1535 = v1482 ? v1534 : v1533;
        const v1536 = v1535[stdlib.checkedBigNumberify('./index.rsh:182:11:array', stdlib.UInt_max, 0)];
        const v1537 = v1535[stdlib.checkedBigNumberify('./index.rsh:182:11:array', stdlib.UInt_max, 1)];
        const v1586 = v1482 ? v1087 : v1099;
        const v1587 = stdlib.mul(v1536, v1088);
        ;
        const v1592 = stdlib.mul(v1537, v1088);
        ;
        const v1659 = v1136.turn;
        const v1710 = {
          O: v1483,
          X: v1435,
          turn: v1659,
          win: v1530
          };
        stdlib.protect(ctc1, await interact.showEnd(v1710, v1112, v1586, v1121), {
          at: './index.rsh:199:23:application',
          fs: ['at ./index.rsh:198:11:application call to [unknown function] (defined at: ./index.rsh:198:14:function exp)'],
          msg: 'showEnd',
          who: 'Bob'
          });
        
        return;}
      }
    }
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 4
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
substring 0 8
btoi
store 1
dup
substring 8 16
btoi
store 2
substring 16 48
store 3
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
// Handler 0
dup
int 0
==
bz l0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 48
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:135:7:dot"
// "[]"
int 100000
dup
bz l1
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l1:
pop
// "CheckPay"
// "./index.rsh:135:7:dot"
// "[]"
load 254
dup
bz l2
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l2:
pop
global Round
load 253
+
store 252
txn Sender
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
int 1
bzero
dig 1
substring 0 56
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0:
// Handler 1
dup
int 1
==
bz l3
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 252
<
assert
load 254
dup
+
store 251
// "CheckPay"
// "./index.rsh:141:7:dot"
// "[]"
load 254
dup
bz l4
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l4:
pop
global Round
load 253
+
store 250
load 255
load 254
itob
concat
load 253
itob
concat
txn Sender
concat
load 251
itob
concat
load 250
itob
concat
int 1
bzero
dig 1
substring 0 96
app_global_put
pop
int 3
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l3:
// Handler 2
dup
int 2
==
bz l5
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 252
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:142:52:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:142:52:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 254
dup
bz l6
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l6:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l7:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l5:
// Handler 3
dup
int 3
==
bz l8
pop
// check step
int 3
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 80
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 249
pop
global Round
load 250
<
assert
// "CheckPay"
// "./index.rsh:149:7:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:149:7:dot"
// "[]"
load 255
txn Sender
==
assert
global Round
load 253
+
store 248
load 255
load 254
itob
concat
load 253
itob
concat
load 252
concat
load 251
itob
concat
load 248
itob
concat
int 1
bzero
dig 1
substring 0 96
app_global_put
pop
int 5
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l8:
// Handler 4
dup
int 4
==
bz l9
pop
// check step
int 3
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 80
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 250
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:150:51:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:150:51:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 251
dup
bz l10
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l10:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l11:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l9:
// Handler 5
dup
int 5
==
bz l12
pop
// check step
int 5
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 80
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
pop
txna ApplicationArgs 2
dup
len
int 256
==
assert
dup
store 249
pop
global Round
load 250
<
assert
// "CheckPay"
// "./index.rsh:152:7:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:152:7:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
load 254
itob
concat
load 253
itob
concat
load 252
concat
load 249
concat
int 18
bzero
int 1
itob // bool
substring 7 8
concat
int 0
itob // bool
substring 7 8
concat
global Round
itob
concat
load 251
itob
concat
b loop7
l12:
// Handler 6
dup
int 6
==
bz l13
pop
// check step
int 5
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 80
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 250
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:153:51:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:153:51:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 251
dup
bz l14
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l14:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l15:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l13:
l16:
l17:
// Handler 9
dup
int 9
==
bz l18
pop
// check step
int 10
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
byte base64(Ag==)
app_global_get
concat
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 80
store 252
dup
int 80
int 336
substring3
store 251
dup
int 336
int 356
substring3
store 250
dup
int 356
int 364
substring3
btoi
store 249
dup
int 364
int 365
substring3
btoi
store 248
dup
int 365
int 373
substring3
btoi
store 247
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 246
pop
global Round
load 247
<
assert
// "CheckPay"
// "./index.rsh:165:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:165:11:dot"
// "[]"
load 255
txn Sender
==
assert
// Nothing
// "./index.rsh:36:10:application"
// "[at ./index.rsh:168:21:application call to \"step\" (defined at: ./index.rsh:35:1:function exp)]"
int 0
load 246
<=
load 246
int 9
<
&&
assert
load 250
substring 9 18
dup
store 245
load 246
getbyte
bz l19
int 1
store 244
b l20
l19:
load 250
substring 0 9
load 246
getbyte
store 244
l20:
// Nothing
// "./index.rsh:37:10:application"
// "[at ./index.rsh:168:21:application call to \"step\" (defined at: ./index.rsh:35:1:function exp)]"
load 244
!
assert
load 248
bz l21
load 245
load 246
int 1
setbyte
store 243
b l22
l21:
load 245
store 243
l22:
load 248
bz l23
load 250
substring 0 9
store 242
b l24
l23:
load 250
substring 0 9
load 246
int 1
setbyte
store 242
l24:
load 255
load 254
itob
concat
load 253
itob
concat
load 252
concat
load 251
concat
load 242
load 243
concat
load 248
!
itob // bool
substring 7 8
concat
int 0
itob // bool
substring 7 8
concat
global Round
itob
concat
load 249
itob
concat
b loop7
l18:
// Handler 10
dup
int 10
==
bz l25
pop
// check step
int 10
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
byte base64(Ag==)
app_global_get
concat
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 80
store 252
dup
int 80
int 336
substring3
store 251
dup
int 336
int 356
substring3
store 250
dup
int 356
int 364
substring3
btoi
store 249
dup
int 364
int 365
substring3
btoi
store 248
dup
int 365
int 373
substring3
btoi
store 247
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 247
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:166:56:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:166:56:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 252
txn Sender
==
assert
load 249
dup
bz l26
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 252
dig 1
gtxns Receiver
==
assert
l26:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l27:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l25:
// Handler 11
dup
int 11
==
bz l28
pop
// check step
int 12
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
byte base64(Ag==)
app_global_get
concat
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 80
store 252
dup
int 80
int 336
substring3
store 251
dup
int 336
int 356
substring3
store 250
dup
int 356
int 364
substring3
btoi
store 249
dup
int 364
int 365
substring3
btoi
store 248
dup
int 365
int 373
substring3
btoi
store 247
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 246
pop
global Round
load 247
<
assert
// "CheckPay"
// "./index.rsh:175:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:175:11:dot"
// "[]"
load 252
txn Sender
==
assert
// Nothing
// "./index.rsh:36:10:application"
// "[at ./index.rsh:178:21:application call to \"step\" (defined at: ./index.rsh:35:1:function exp)]"
int 0
load 246
<=
load 246
int 9
<
&&
assert
load 250
substring 9 18
dup
store 245
load 246
getbyte
bz l29
int 1
store 244
b l30
l29:
load 250
substring 0 9
load 246
getbyte
store 244
l30:
// Nothing
// "./index.rsh:37:10:application"
// "[at ./index.rsh:178:21:application call to \"step\" (defined at: ./index.rsh:35:1:function exp)]"
load 244
!
assert
load 248
bz l31
load 245
load 246
int 1
setbyte
store 243
b l32
l31:
load 245
store 243
l32:
load 248
bz l33
load 250
substring 0 9
store 242
b l34
l33:
load 250
substring 0 9
load 246
int 1
setbyte
store 242
l34:
load 255
load 254
itob
concat
load 253
itob
concat
load 252
concat
load 251
concat
load 242
load 243
concat
load 248
!
itob // bool
substring 7 8
concat
int 0
itob // bool
substring 7 8
concat
global Round
itob
concat
load 249
itob
concat
b loop7
l28:
// Handler 12
dup
int 12
==
bz l35
pop
// check step
int 12
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
byte base64(Ag==)
app_global_get
concat
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 80
store 252
dup
int 80
int 336
substring3
store 251
dup
int 336
int 356
substring3
store 250
dup
int 356
int 364
substring3
btoi
store 249
dup
int 364
int 365
substring3
btoi
store 248
dup
int 365
int 373
substring3
btoi
store 247
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 247
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:176:56:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:176:56:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 249
dup
bz l36
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l36:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l37:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l35:
int 0
assert
loop7:
dup
substring 0 20
store 255
dup
substring 20 28
btoi
store 254
dup
substring 28 36
btoi
store 253
pop
dup
substring 0 32
store 252
dup
substring 32 40
btoi
store 251
dup
substring 40 48
btoi
store 250
dup
substring 48 80
store 249
dup
int 80
int 336
substring3
store 248
pop
load 255
substring 0 9
dup
store 247
int 0
getbyte
store 246
load 247
int 1
getbyte
store 245
load 247
int 2
getbyte
store 244
load 247
int 3
getbyte
store 243
load 247
int 4
getbyte
store 242
load 247
int 5
getbyte
store 241
load 247
int 6
getbyte
store 240
load 247
int 7
getbyte
store 239
load 247
int 8
getbyte
store 238
load 255
substring 9 18
dup
store 237
int 0
getbyte
store 236
load 237
int 1
getbyte
store 235
load 237
int 2
getbyte
store 234
load 237
int 3
getbyte
store 233
load 237
int 4
getbyte
store 232
load 237
int 5
getbyte
store 231
load 237
int 6
getbyte
store 230
load 237
int 7
getbyte
store 229
load 237
int 8
getbyte
store 228
load 246
load 245
&&
load 244
&&
load 243
load 242
&&
load 241
&&
||
load 240
load 239
&&
load 238
&&
||
load 246
load 243
&&
load 240
&&
||
load 245
load 242
&&
load 239
&&
||
load 244
load 241
&&
load 238
&&
||
load 246
load 242
&&
load 238
&&
||
load 244
load 242
&&
load 240
&&
||
load 236
load 235
&&
load 234
&&
load 233
load 232
&&
load 231
&&
||
load 230
load 229
&&
load 228
&&
||
load 236
load 233
&&
load 230
&&
||
load 235
load 232
&&
load 229
&&
||
load 234
load 231
&&
load 228
&&
||
load 236
load 232
&&
load 228
&&
||
load 234
load 232
&&
load 230
&&
||
||
load 236
load 246
||
load 235
load 245
||
&&
load 234
load 244
||
&&
load 233
load 243
||
&&
load 232
load 242
||
&&
load 231
load 241
||
&&
load 230
load 240
||
&&
load 229
load 239
||
&&
load 228
load 238
||
&&
||
bz l38
load 252
load 251
itob
concat
load 249
concat
load 248
concat
load 255
concat
byte base64()
b loop8
l38:
load 255
substring 18 19
btoi
dup
store 227
bz l39
load 254
load 250
+
store 226
load 252
load 251
itob
concat
load 250
itob
concat
load 249
concat
load 248
concat
load 255
concat
load 253
itob
concat
load 227
itob // bool
substring 7 8
concat
load 226
itob
concat
int 1
bzero
dig 1
substring 0 127
app_global_put
byte base64(AQ==)
dig 1
substring 127 254
app_global_put
byte base64(Ag==)
dig 1
int 254
int 373
substring3
app_global_put
pop
int 10
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l39:
load 254
load 250
+
store 226
load 252
load 251
itob
concat
load 250
itob
concat
load 249
concat
load 248
concat
load 255
concat
load 253
itob
concat
load 227
itob // bool
substring 7 8
concat
load 226
itob
concat
int 1
bzero
dig 1
substring 0 127
app_global_put
byte base64(AQ==)
dig 1
substring 127 254
app_global_put
byte base64(Ag==)
dig 1
int 254
int 373
substring3
app_global_put
pop
int 12
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
loop8:
pop
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
int 72
int 328
substring3
store 252
dup
int 328
int 348
substring3
store 251
pop
load 251
substring 9 18
dup
store 250
int 0
getbyte
store 249
load 250
int 1
getbyte
store 248
load 250
int 2
getbyte
store 247
load 250
int 3
getbyte
store 246
load 250
int 4
getbyte
store 245
load 250
int 5
getbyte
store 244
load 250
int 6
getbyte
store 243
load 250
int 7
getbyte
store 242
load 250
int 8
getbyte
store 241
load 251
substring 0 9
dup
store 240
int 0
getbyte
store 239
load 240
int 1
getbyte
store 238
load 240
int 2
getbyte
store 237
load 240
int 3
getbyte
store 236
load 240
int 4
getbyte
store 235
load 240
int 5
getbyte
store 234
load 240
int 6
getbyte
store 233
load 240
int 7
getbyte
store 232
load 240
int 8
getbyte
store 231
byte base64(AAAAAAAAAAEAAAAAAAAAAQ==)
byte base64(AAAAAAAAAAAAAAAAAAAAAg==)
load 239
load 238
&&
load 237
&&
load 236
load 235
&&
load 234
&&
||
load 233
load 232
&&
load 231
&&
||
load 239
load 236
&&
load 233
&&
||
load 238
load 235
&&
load 232
&&
||
load 237
load 234
&&
load 231
&&
||
load 239
load 235
&&
load 231
&&
||
load 237
load 235
&&
load 233
&&
||
select
byte base64(AAAAAAAAAAIAAAAAAAAAAA==)
load 249
load 248
&&
load 247
&&
load 246
load 245
&&
load 244
&&
||
load 243
load 242
&&
load 241
&&
||
load 249
load 246
&&
load 243
&&
||
load 248
load 245
&&
load 242
&&
||
load 247
load 244
&&
load 241
&&
||
load 249
load 245
&&
load 241
&&
||
load 247
load 245
&&
load 243
&&
||
select
dup
store 230
substring 0 8
btoi
load 254
*
dup
bz l40
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l40:
pop
load 230
substring 8 16
btoi
load 254
*
dup
bz l41
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l41:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l42:
pop
txn OnCompletion
int DeleteApplication
==
assert
updateState:
byte base64()
load 1
itob
load 2
itob
load 3
concat
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
global ZeroAddress
store 3
b updateState
`,
  appClear: `#pragma version 4
int 0
`,
  escrow: `#pragma version 4
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 3,
  stateSize: 373,
  unsupported: [],
  version: 4
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1088",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1089",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1088",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1089",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1386",
                "type": "uint256"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1112",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256[32]",
                "name": "v1121",
                "type": "uint256[32]"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1319",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "NFT_owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "NFT_url",
    "outputs": [
      {
        "internalType": "uint256[32]",
        "name": "",
        "type": "uint256[32]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1386",
                "type": "uint256"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1112",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256[32]",
                "name": "v1121",
                "type": "uint256[32]"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1319",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200373f3803806200373f83398101604081905262000026916200020d565b6000808055604080516020810190915290815260408051835181526020808501518051828401520151918101919091527ff6f99043ebaefcd14be52433ca7dc9978aa637aef8ca1601e1816a0abc2f99299060600160405180910390a16020820151516200009890341460096200013d565b6020808301510151620000ac9043620002a4565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a09091019093528051919262000133926002929091019062000167565b5050505062000308565b81620001635760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017590620002cb565b90600052602060002090601f016020900481019282620001995760008555620001e4565b82601f10620001b457805160ff1916838001178555620001e4565b82800160010185558215620001e4579182015b82811115620001e4578251825591602001919060010190620001c7565b50620001f2929150620001f6565b5090565b5b80821115620001f25760008155600101620001f7565b600081830360608112156200022157600080fd5b6200022b6200026d565b835181526040601f19830112156200024257600080fd5b6200024c6200026d565b60208581015182526040909501518582015293810193909352509092915050565b604080519081016001600160401b03811182821017156200029e57634e487b7160e01b600052604160045260246000fd5b60405290565b60008219821115620002c657634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e057607f821691505b602082108114156200030257634e487b7160e01b600052602260045260246000fd5b50919050565b61342780620003186000396000f3fe6080604052600436106100c65760003560e01c80634ce4f2651161007f5780637963168e116100595780637963168e1461019e57806383230757146101b1578063b63b3d57146101cf578063fd948b86146101f157600080fd5b80634ce4f265146101465780635cf275dd14610159578063677d4e321461018b57600080fd5b80630a51bf87146100d25780630d19a5fb146100e75780631edb3427146100fa5780632d800bb51461010d578063306ab814146101205780633f1584e91461013357600080fd5b366100cd57005b600080fd5b6100e56100e03660046130a5565b610204565b005b6100e56100f53660046130a5565b6104ff565b6100e56101083660046130a5565b610689565b6100e561011b3660046130a5565b61088b565b6100e561012e3660046130a5565b610a4c565b6100e56101413660046130c8565b610bc4565b6100e56101543660046130a5565b610e52565b34801561016557600080fd5b5061016e610f85565b6040516001600160a01b0390911681526020015b60405180910390f35b6100e56101993660046130a5565b61133d565b6100e56101ac3660046130a5565b6114ae565b3480156101bd57600080fd5b50600154604051908152602001610182565b3480156101db57600080fd5b506101e46116ac565b6040516101829190613224565b6100e56101ff3660046130a5565b611a67565b610214600c600054146037611bd7565b600154610225908235146038611bd7565b60008080556002805461023790613351565b80601f016020809104026020016040519081016040528092919081815260200182805461026390613351565b80156102b05780601f10610285576101008083540402835291602001916102b0565b820191906000526020600020905b81548152906001019060200180831161029357829003601f168201915b50505050508060200190518101906102c891906130f7565b90506102d26129eb565b6102e482610100015143106039611bd7565b7f47ebefb90799abdd5a713b2400b5532c4a54d5d426b97b33dabccf8a5d10bbd083604051610313919061325e565b60405180910390a161032734156033611bd7565b6060820151610342906001600160a01b031633146034611bd7565b61035460096020850135106035611bd7565b8160a0015160200151836020016000013560098110610375576103756133b7565b60200201511561038857600181526103ad565b60a0820151516020840135600981106103a3576103a36133b7565b6020020151151581525b80516103c8906103be5760016103c1565b60005b6036611bd7565b8160e00151156103f7576103ed8260a001516020015184602001600001356001611c00565b6020820152610407565b60a0820151602090810151908201525b8160e00151156104215760a082015151604082015261043d565b60a0820151516104379060208501356001611c00565b60408201525b6040810151606082018051919091526020808301519151015260e0820151610466576001610469565b60005b606080830180519215156040909301929092529051600091015261048b612a26565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087015185519416938101939093526080808701518551909101529184015181840180519190915280514392019190915260c08501519051909101526104f981611c7e565b50505050565b61050f600360005414601a611bd7565b60015461052090823514601b611bd7565b60008080556002805461053290613351565b80601f016020809104026020016040519081016040528092919081815260200182805461055e90613351565b80156105ab5780601f10610580576101008083540402835291602001916105ab565b820191906000526020600020905b81548152906001019060200180831161058e57829003601f168201915b50505050508060200190518101906105c391906130db565b90506105d78160a00151431015601c611bd7565b7f64c05390f66d4c96d69b55a2d6f7bb5135997731e2b63f4a719a786bc0579627826040516106069190613239565b60405180910390a161061a34156018611bd7565b8051610632906001600160a01b031633146019611bd7565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561066f573d6000803e3d6000fd5b506000808055600181905561068690600290612a46565b33ff5b6106996003600054146015611bd7565b6001546106aa908235146016611bd7565b6000808055600280546106bc90613351565b80601f01602080910402602001604051908101604052809291908181526020018280546106e890613351565b80156107355780601f1061070a57610100808354040283529160200191610735565b820191906000526020600020905b81548152906001019060200180831161071857829003601f168201915b505050505080602001905181019061074d91906130db565b90506107656040518060200160405280600081525090565b6107768260a0015143106017611bd7565b7fa9113ca7be129dbfc8a7f27e8f0a5587942d1c3764a5034cfdb35715a0280686836040516107a5919061325e565b60405180910390a16107b934156013611bd7565b81516107d1906001600160a01b031633146014611bd7565b60408201516107e0904361331a565b81526040805160c081018252600080825260208083018281528385018381526060808601858152608080880187815260a089018881528c516001600160a01b039081168b528d8901519097528c8b0151909552928b0151909416905291880151909152855190526005909155436001559151909161086091839101613294565b60405160208183030381529060405260029080519060200190610884929190612a83565b5050505050565b61089b600a60005414602b611bd7565b6001546108ac90823514602c611bd7565b6000808055600280546108be90613351565b80601f01602080910402602001604051908101604052809291908181526020018280546108ea90613351565b80156109375780601f1061090c57610100808354040283529160200191610937565b820191906000526020600020905b81548152906001019060200180831161091a57829003601f168201915b505050505080602001905181019061094f91906130f7565b90506109596129eb565b61096b8261010001514310602d611bd7565b7fc5acb149be38f34aa4f4d263449f6fd0e4d411d048a4e999ed66b65878d50c5d8360405161099a919061325e565b60405180910390a16109ae34156027611bd7565b81516109c6906001600160a01b031633146028611bd7565b6109d860096020850135106029611bd7565b8160a00151602001518360200160000135600981106109f9576109f96133b7565b602002015115610a0c5760018152610a31565b60a082015151602084013560098110610a2757610a276133b7565b6020020151151581525b80516103c890610a42576001610a45565b60005b602a611bd7565b610a5c600a600054146030611bd7565b600154610a6d908235146031611bd7565b600080805560028054610a7f90613351565b80601f0160208091040260200160405190810160405280929190818152602001828054610aab90613351565b8015610af85780601f10610acd57610100808354040283529160200191610af8565b820191906000526020600020905b815481529060010190602001808311610adb57829003601f168201915b5050505050806020019051810190610b1091906130f7565b9050610b258161010001514310156032611bd7565b7fbc00bef455301cf914c30c8a9af2a81c4e58a53a327cc5726ef84b62ea9c1fc982604051610b549190613239565b60405180910390a1610b683415602e611bd7565b6060810151610b83906001600160a01b03163314602f611bd7565b80606001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f1935050505015801561066f573d6000803e3d6000fd5b610bd4600560005414601f611bd7565b600154610be5908235146020611bd7565b600080805560028054610bf790613351565b80601f0160208091040260200160405190810160405280929190818152602001828054610c2390613351565b8015610c705780601f10610c4557610100808354040283529160200191610c70565b820191906000526020600020905b815481529060010190602001808311610c5357829003601f168201915b5050505050806020019051810190610c8891906130db565b9050610c92612b07565b610ca38260a0015143106021611bd7565b7f68c1573915f98505abcf06f8e34277d201f34201e234c866f5673bd283bc716483604051610cd29190613275565b60405180910390a1610ce63415601d611bd7565b8151610cfe906001600160a01b03163314601e611bd7565b805160009081905281516020908101829052825160409081018390528351606090810184905284516080908101859052855160a0908101869052865160c0908101879052875160e09081018890528851610100908101899052878a0180518a9052805189018a9052805188018a9052805187018a9052805190950189905284519093018890528351909101879052825101869052815101859052855183870180519190915290518151909401939093528251600192019190915290510152610dc4612a26565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169301929092528151610400818101909352918682019190839083908082843760009201919091525050825160809081019290925250604080840151602080850180519290925281514391015291850151915101526104f981611c7e565b610e626005600054146024611bd7565b600154610e73908235146025611bd7565b600080805560028054610e8590613351565b80601f0160208091040260200160405190810160405280929190818152602001828054610eb190613351565b8015610efe5780601f10610ed357610100808354040283529160200191610efe565b820191906000526020600020905b815481529060010190602001808311610ee157829003601f168201915b5050505050806020019051810190610f1691906130db565b9050610f2a8160a001514310156026611bd7565b7f2de542e04768f7d432d52df08943d2fab028221c30dba664ab546be3aae5e4a082604051610f599190613239565b60405180910390a1610f6d34156022611bd7565b8051610632906001600160a01b031633146023611bd7565b60006001600054141561104257600060028054610fa190613351565b80601f0160208091040260200160405190810160405280929190818152602001828054610fcd90613351565b801561101a5780601f10610fef5761010080835404028352916020019161101a565b820191906000526020600020905b815481529060010190602001808311610ffd57829003601f168201915b5050505050806020019051810190611032919061303a565b905061104060006007611bd7565b505b600360005414156110fd5760006002805461105c90613351565b80601f016020809104026020016040519081016040528092919081815260200182805461108890613351565b80156110d55780601f106110aa576101008083540402835291602001916110d5565b820191906000526020600020905b8154815290600101906020018083116110b857829003601f168201915b50505050508060200190518101906110ed91906130db565b90506110fb60006007611bd7565b505b600560005414156111b85760006002805461111790613351565b80601f016020809104026020016040519081016040528092919081815260200182805461114390613351565b80156111905780601f1061116557610100808354040283529160200191611190565b820191906000526020600020905b81548152906001019060200180831161117357829003601f168201915b50505050508060200190518101906111a891906130db565b90506111b660006007611bd7565b505b600a6000541415611273576000600280546111d290613351565b80601f01602080910402602001604051908101604052809291908181526020018280546111fe90613351565b801561124b5780601f106112205761010080835404028352916020019161124b565b820191906000526020600020905b81548152906001019060200180831161122e57829003601f168201915b505050505080602001905181019061126391906130f7565b905061127160006007611bd7565b505b600c600054141561132e5760006002805461128d90613351565b80601f01602080910402602001604051908101604052809291908181526020018280546112b990613351565b80156113065780601f106112db57610100808354040283529160200191611306565b820191906000526020600020905b8154815290600101906020018083116112e957829003601f168201915b505050505080602001905181019061131e91906130f7565b905061132c60006007611bd7565b505b61133a60006007611bd7565b90565b61134d600c60005414603c611bd7565b60015461135e90823514603d611bd7565b60008080556002805461137090613351565b80601f016020809104026020016040519081016040528092919081815260200182805461139c90613351565b80156113e95780601f106113be576101008083540402835291602001916113e9565b820191906000526020600020905b8154815290600101906020018083116113cc57829003601f168201915b505050505080602001905181019061140191906130f7565b9050611416816101000151431015603e611bd7565b7f12dc974105ba7a7eeddfc66530e819e233c43be512bccd30dcfa88d88b4e3a14826040516114459190613239565b60405180910390a16114593415603a611bd7565b8051611471906001600160a01b03163314603b611bd7565b805160c08201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561066f573d6000803e3d6000fd5b6114be600160005414600b611bd7565b6001546114cf90823514600c611bd7565b6000808055600280546114e190613351565b80601f016020809104026020016040519081016040528092919081815260200182805461150d90613351565b801561155a5780601f1061152f5761010080835404028352916020019161155a565b820191906000526020600020905b81548152906001019060200180831161153d57829003601f168201915b5050505050806020019051810190611572919061303a565b9050611591604051806040016040528060008152602001600081525090565b6115a282606001514310600d611bd7565b7f9f41c6cf17ede288cbb2cfbbafdd05b2b2025dea3b047cdb79dbc892d7a9286d836040516115d19190613239565b60405180910390a160208201516115e8908061331a565b815260208201516115fc903414600a611bd7565b604082015161160b904361331a565b81602001818152505061165f6040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b82516001600160a01b031681526020808401518183015260408085015181840152336060840152835160808401528382015160a08401526003600055436001555161086091839101613294565b6116b4612b1a565b6001600054141561176f576000600280546116ce90613351565b80601f01602080910402602001604051908101604052809291908181526020018280546116fa90613351565b80156117475780601f1061171c57610100808354040283529160200191611747565b820191906000526020600020905b81548152906001019060200180831161172a57829003601f168201915b505050505080602001905181019061175f919061303a565b905061176d60006008611bd7565b505b6003600054141561182a5760006002805461178990613351565b80601f01602080910402602001604051908101604052809291908181526020018280546117b590613351565b80156118025780601f106117d757610100808354040283529160200191611802565b820191906000526020600020905b8154815290600101906020018083116117e557829003601f168201915b505050505080602001905181019061181a91906130db565b905061182860006008611bd7565b505b600560005414156118e55760006002805461184490613351565b80601f016020809104026020016040519081016040528092919081815260200182805461187090613351565b80156118bd5780601f10611892576101008083540402835291602001916118bd565b820191906000526020600020905b8154815290600101906020018083116118a057829003601f168201915b50505050508060200190518101906118d591906130db565b90506118e360006008611bd7565b505b600a60005414156119a0576000600280546118ff90613351565b80601f016020809104026020016040519081016040528092919081815260200182805461192b90613351565b80156119785780601f1061194d57610100808354040283529160200191611978565b820191906000526020600020905b81548152906001019060200180831161195b57829003601f168201915b505050505080602001905181019061199091906130f7565b905061199e60006008611bd7565b505b600c6000541415611a5b576000600280546119ba90613351565b80601f01602080910402602001604051908101604052809291908181526020018280546119e690613351565b8015611a335780601f10611a0857610100808354040283529160200191611a33565b820191906000526020600020905b815481529060010190602001808311611a1657829003601f168201915b5050505050806020019051810190611a4b91906130f7565b9050611a5960006008611bd7565b505b61133a60006008611bd7565b611a776001600054146010611bd7565b600154611a88908235146011611bd7565b600080805560028054611a9a90613351565b80601f0160208091040260200160405190810160405280929190818152602001828054611ac690613351565b8015611b135780601f10611ae857610100808354040283529160200191611b13565b820191906000526020600020905b815481529060010190602001808311611af657829003601f168201915b5050505050806020019051810190611b2b919061303a565b9050611b3f81606001514310156012611bd7565b7fe0777bbb0edbebd8a5c254bf54fd955256e9bf9fb0fe4138cd88ac193a101d1582604051611b6e9190613239565b60405180910390a1611b823415600e611bd7565b8051611b9a906001600160a01b03163314600f611bd7565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561066f573d6000803e3d6000fd5b81611bfc5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b611c08612b39565b60005b6009811015611c5957848160098110611c2657611c266133b7565b6020020151828260098110611c3d57611c3d6133b7565b9115156020909202015280611c5181613386565b915050611c0b565b5081818460098110611c6d57611c6d6133b7565b911515602090920201529392505050565b604080518082019091526000808252602080830191909152820151515151611ca7576000611cb2565b602082810151515101515b611cbd576000611cc9565b60208201515151604001515b611d0a576020820151515160600151611ce3576000611cef565b60208201515151608001515b611cfa576000611d0d565b6020820151515160a00151611d0d565b60015b611d4f576020820151515160c00151611d27576000611d33565b6020820151515160e001515b611d3e576000611d52565b602082015151516101000151611d52565b60015b611d90576020820151515151611d69576000611d75565b60208201515151606001515b611d80576000611d93565b6020820151515160c00151611d93565b60015b611dd35760208281015151510151611dac576000611db8565b60208201515151608001515b611dc3576000611dd6565b6020820151515160e00151611dd6565b60015b611e18576020820151515160400151611df0576000611dfc565b6020820151515160a001515b611e07576000611e1b565b602082015151516101000151611e1b565b60015b611e5a576020820151515151611e32576000611e3e565b60208201515151608001515b611e49576000611e5d565b602082015151516101000151611e5d565b60015b611e9e576020820151515160400151611e77576000611e83565b60208201515151608001515b611e8e576000611ea1565b6020820151515160c00151611ea1565b60015b6120e65760208281015151015151611eba576000611ec7565b6020828101515181015101515b611ed2576000611ee0565b602082810151510151604001515b611f275760208281015151015160600151611efc576000611f0a565b602082810151510151608001515b611f15576000611f2a565b60208281015151015160a00151611f2a565b60015b611f725760208281015151015160c00151611f46576000611f54565b60208281015151015160e001515b611f5f576000611f75565b6020828101515101516101000151611f75565b60015b611fb95760208281015151015151611f8e576000611f9c565b602082810151510151606001515b611fa7576000611fbc565b60208281015151015160c00151611fbc565b60015b61200257602082810151518101510151611fd7576000611fe5565b602082810151510151608001515b611ff0576000612005565b60208281015151015160e00151612005565b60015b61204d576020828101515101516040015161202157600061202f565b60208281015151015160a001515b61203a576000612050565b6020828101515101516101000151612050565b60015b6120955760208281015151015151612069576000612077565b602082810151510151608001515b612082576000612098565b6020828101515101516101000151612098565b60015b6120df57602082810151510151604001516120b45760006120c2565b602082810151510151608001515b6120cd5760006120e9565b60208281015151015160c001516120e9565b60016120e9565b60015b612287576020828101515101515161210857602082015151515161210b565b60015b612116576000612138565b6020828101515181015101516121355760208281015151510151612138565b60015b612143576000612167565b60208281015151015160400151612164576020820151515160400151612167565b60015b612172576000612196565b60208281015151015160600151612193576020820151515160600151612196565b60015b6121a15760006121c5565b602082810151510151608001516121c25760208201515151608001516121c5565b60015b6121d05760006121f4565b60208281015151015160a001516121f1576020820151515160a001516121f4565b60015b6121ff576000612223565b60208281015151015160c00151612220576020820151515160c00151612223565b60015b61222e576000612252565b60208281015151015160e0015161224f576020820151515160e00151612252565b60015b61225d57600061228a565b60208281015151015161010001516122805760208201515151610100015161228a565b600161228a565b60015b156122f457612297612b58565b82515181516001600160a01b039182169052835160209081015183518201528451606090810151845193166040909301929092528451608090810151845190930192909252840151518251909101526122ef8161247c565b505050565b60208201515160400151156123cf57815160400151602080840151015161231b919061331a565b8152612325612b78565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925284516080908101519084015280850180515160a0850152805183015160c08501525151820151151560e08401528351610100840152600a6000554360015590516123ab918391016132e1565b604051602081830303815290604052600290805190602001906104f9929190612a83565b81516040015160208084015101516123e7919061331a565b60208201526123f4612b78565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925284516080908101519084015280850180515160a0850152805183015160c08501525151820151151560e084015283810151610100840152600c6000554360015590516123ab918391016132e1565b612484612be4565b80516000908190528151600260209182018190528184018051600190819052905183015260408401805191909152518101919091528251608001510151516124cd5760006124dc565b81516080015160209081015101515b6124e75760006124f6565b81516080015160200151604001515b612540578151608001516020015160600151612513576000612522565b81516080908101516020015101515b61252d576000612543565b8151608001516020015160a00151612543565b60015b61258e578151608001516020015160c0015161256057600061256f565b8151608001516020015160e001515b61257a576000612591565b815160800151602001516101000151612591565b60015b6125d85781516080015160200151516125ab5760006125ba565b81516080015160200151606001515b6125c55760006125db565b8151608001516020015160c001516125db565b60015b6126255781516080015160209081015101516125f8576000612607565b81516080908101516020015101515b612612576000612628565b8151608001516020015160e00151612628565b60015b612673578151608001516020015160400151612645576000612654565b8151608001516020015160a001515b61265f576000612676565b815160800151602001516101000151612676565b60015b6126be57815160800151602001515161269057600061269f565b81516080908101516020015101515b6126aa5760006126c1565b8151608001516020015161010001516126c1565b60015b61270b5781516080015160200151604001516126de5760006126ed565b81516080908101516020015101515b6126f857600061270e565b8151608001516020015160c0015161270e565b60015b612936578151608001515151612725576000612731565b81516080015151602001515b61273c576000612748565b81516080015151604001515b61278957815160800151516060015161276257600061276e565b81516080908101515101515b61277957600061278c565b8151608001515160a0015161278c565b60015b6127ce578151608001515160c001516127a65760006127b2565b8151608001515160e001515b6127bd5760006127d1565b8151608001515161010001516127d1565b60015b61280f5781516080015151516127e85760006127f4565b81516080015151606001515b6127ff576000612812565b8151608001515160c00151612812565b60015b61285357815160800151516020015161282c576000612838565b81516080908101515101515b612843576000612856565b8151608001515160e00151612856565b60015b61289857815160800151516040015161287057600061287c565b8151608001515160a001515b61288757600061289b565b81516080015151610100015161289b565b60015b6128da5781516080015151516128b25760006128be565b81516080908101515101515b6128c95760006128dd565b8151608001515161010001516128dd565b60015b61291e5781516080015151604001516128f7576000612903565b81516080908101515101515b61290e576000612921565b8151608001515160c00151612921565b60015b61292f57806020015161293c565b805161293c565b80604001515b606082018190528251805160209091015191516001600160a01b03909116916108fc916129699190613332565b6040518115909202916000818181858888f19350505050158015612991573d6000803e3d6000fd5b508160000151604001516001600160a01b03166108fc8360000151602001518360600151602001516129c39190613332565b6040518115909202916000818181858888f1935050505015801561066f573d6000803e3d6000fd5b6040518060800160405280600015158152602001612a07612b39565b8152602001612a14612b39565b8152602001612a21612c68565b905290565b6040518060400160405280612a39612c9c565b8152602001612a21612cdd565b508054612a5290613351565b6000825580601f10612a62575050565b601f016020900490600052602060002090810190612a809190612d04565b50565b828054612a8f90613351565b90600052602060002090601f016020900481019282612ab15760008555612af7565b82601f10612aca57805160ff1916838001178555612af7565b82800160010185558215612af7579182015b82811115612af7578251825591602001919060010190612adc565b50612b03929150612d04565b5090565b6040518060600160405280612a07612b39565b6040518061040001604052806020906020820280368337509192915050565b6040518061012001604052806009906020820280368337509192915050565b6040518060400160405280612b6b612d19565b8152600060209091015290565b60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001612bba612b1a565b8152602001612bc7612c68565b815260200160008152602001600015158152602001600081525090565b6040805160c0810190915260006080820181815260a083019190915281908152602001612c24604051806040016040528060008152602001600081525090565b8152602001612c46604051806040016040528060008152602001600081525090565b8152602001612a21604051806040016040528060008152602001600081525090565b6040518060800160405280612c7b612b39565b8152602001612c88612b39565b815260006020820181905260409091015290565b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001612a21612b1a565b6040518060600160405280612cf0612c68565b815260200160008152602001600081525090565b5b80821115612b035760008155600101612d05565b6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001612a14612b1a565b80516001600160a01b0381168114612d6a57600080fd5b919050565b600082601f830112612d8057600080fd5b60405161012080820182811067ffffffffffffffff82111715612da557612da56133cd565b6040528184828101871015612db957600080fd5b600092505b6009831015612de7578051612dd2816133e3565b82526001929092019160209182019101612dbe565b509195945050505050565b600082601f830112612e0357600080fd5b60405161040080820182811067ffffffffffffffff82111715612e2857612e286133cd565b6040528184828101871015612e3c57600080fd5b600092505b6020808410612e505750612de7565b81518352600193909301929182019101612e41565b8051612d6a816133e3565b600060408284031215612e8257600080fd5b50919050565b600060c08284031215612e9a57600080fd5b60405160c0810181811067ffffffffffffffff82111715612ebd57612ebd6133cd565b604052905080612ecc83612d53565b81526020830151602082015260408301516040820152612eee60608401612d53565b60608201526080830151608082015260a083015160a08201525092915050565b60006102808284031215612f2157600080fd5b6040516080810181811067ffffffffffffffff82111715612f4457612f446133cd565b604052905080612f548484612d6f565b8152612f64846101208501612d6f565b6020820152610240830151612f78816133e3565b6040820152610260830151612f8c816133e3565b6060919091015292915050565b60006107608284031215612fac57600080fd5b612fb46132f0565b9050612fbf82612d53565b81526020820151602082015260408201516040820152612fe160608301612d53565b6060820152612ff38360808401612df2565b6080820152613006836104808401612f0e565b60a082015261070082015160c08201526130236107208301612e65565b60e082015261074082015161010082015292915050565b60006080828403121561304c57600080fd5b6040516080810181811067ffffffffffffffff8211171561306f5761306f6133cd565b60405261307b83612d53565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6000604082840312156130b757600080fd5b6130c18383612e70565b9392505050565b60006104208284031215612e8257600080fd5b600060c082840312156130ed57600080fd5b6130c18383612e88565b6000610760828403121561310a57600080fd5b6130c18383612f99565b8060005b60098110156104f95781511515845260209384019390910190600101613118565b8060005b602080821061314c57506104f9565b82518552938401939091019060010161313d565b61316b828251613114565b602081015161317e610120840182613114565b506040810151151561024083015260600151151561026090910152565b80516001600160a01b03168252602081015160208301526040810151604083015260608101516131d660608401826001600160a01b03169052565b5060808101516131e96080840182613139565b5060a08101516131fd610480840182613160565b5060c081015161070083015260e08101511515610720830152610100015161074090910152565b61040081016132338284613139565b92915050565b8135815260408101602083013561324f816133e3565b80151560208401525092915050565b813581526020808301359082015260408101613233565b8135815261042081016104006020808501908401376000815292915050565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c08101613233565b6107608101613233828461319b565b604051610120810167ffffffffffffffff81118282101715613314576133146133cd565b60405290565b6000821982111561332d5761332d6133a1565b500190565b600081600019048311821515161561334c5761334c6133a1565b500290565b600181811c9082168061336557607f821691505b60208210811415612e8257634e487b7160e01b600052602260045260246000fd5b600060001982141561339a5761339a6133a1565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b8015158114612a8057600080fdfea264697066735822122047fdbcdeb0bbbfb3472c45110883adc8b1aeda3708ac36f0f162ceda2acb1a3864736f6c63430008070033`,
  BytecodeLen: 14143,
  Which: `oD`,
  version: 3,
  views: {
    NFT: {
      owner: `NFT_owner`,
      url: `NFT_url`
      }
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

