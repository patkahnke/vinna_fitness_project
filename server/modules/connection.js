var connectionString = '';

if(process.env.DATABASE_URL != undefined) {
  connectionString = process.env.DATABASE_URL + "?ssl=true";
} else {
  connectionString = 'postgres://gprbmrbaeemuux:k2Skt178phw_S6kIrJmpkErYg1@ec2-54-225-211-218.compute-1.amazonaws.com:5432/d3u173chd9eq5m' + "?ssl=true";
}

module.exports = connectionString;
