var connectionString = '';
//change this connection string value to swap between DB
if(process.env.DATABASE_URL !== undefined) {
  //Use by devs or ange
  //connectionString = 'postgres://gprbmrbaeemuux:k2Skt178phw_S6kIrJmpkErYg1@ec2-54-225-211-218.compute-1.amazonaws.com:5432/d3u173chd9eq5m' + "?ssl=true";
  //official use string by vinna
  connectionString = process.env.DATABASE_URL + "?ssl=true";
} else {
  connectionString = 'postgres://gprbmrbaeemuux:k2Skt178phw_S6kIrJmpkErYg1@ec2-54-225-211-218.compute-1.amazonaws.com:5432/d3u173chd9eq5m' + "?ssl=true";
  return;
}

// connectionString = 'postgres://gprbmrbaeemuux:k2Skt178phw_S6kIrJmpkErYg1@ec2-54-225-211-218.compute-1.amazonaws.com:5432/d3u173chd9eq5m' + "?ssl=true";

module.exports = connectionString;
