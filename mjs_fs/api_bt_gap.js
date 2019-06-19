let GAP = {

  UUID_LEN : {
    UUID_LEN_16: 2,
    UUID_LEN_32: 4,
    UUID_LEN_128: 16
  },

  EV_GRP: Event.baseNumber('GAP'),

  scan: ffi('bool mgos_bt_gap_scan_js(int, bool)'),
  getScanResultArg: function(evdata) { return s2o(evdata, GAP._srdd) },

  // ## **`GAP.parseName(advData)`**
  // Parse name from adv data. Tries to get long, falls back to short.
  parseName: ffi('char *mgos_bt_gap_parse_name_js(struct mg_str *)'),
  // ## **`GAP.parseServiceData(advData,uuid len)`**
  // Retrieve UUID string from adv data (blank if non set). Pass UUID bit length that you are looking for.
  parseServiceData: ffi('char *mgos_bt_gap_parse_service_data_js(struct mg_str *, int)'),

  _srdd: ffi('void *mgos_bt_gap_get_srdd(void)')(),
};

GAP.EV_SCAN_RESULT = GAP.EV_GRP + 0;
GAP.EV_SCAN_STOP   = GAP.EV_GRP + 1;
