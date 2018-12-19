define({"topics" : [{"title":"Origins","shortdesc":"\n            <p class=\"shortdesc\">An origin stage represents the source for the pipeline. You can use a single origin     stage in a pipeline.</p>\n         ","href":"datacollector\/UserGuide\/Origins\/Origins_overview.html#concept_hpr_twm_jq","attributes": {"data-id":"concept_hpr_twm_jq",},"menu": {"hasChildren":true,},"tocID":"concept_hpr_twm_jq-d46e27887","next":"concept_hpr_twm_jq-d46e27887",},{"title":"Amazon S3","href":"datacollector\/UserGuide\/Origins\/AmazonS3.html#concept_kvs_3hh_ht","attributes": {"data-id":"concept_kvs_3hh_ht",},"menu": {"hasChildren":true,},"tocID":"concept_kvs_3hh_ht-d46e28457","next":"concept_kvs_3hh_ht-d46e28457",},{"title":"Amazon SQS Consumer","href":"datacollector\/UserGuide\/Origins\/AmazonSQS.html#concept_xsh_knm_5bb","attributes": {"data-id":"concept_xsh_knm_5bb",},"menu": {"hasChildren":true,},"tocID":"concept_xsh_knm_5bb-d46e29542","next":"concept_xsh_knm_5bb-d46e29542",},{"title":"Azure IoT\/Event Hub Consumer","href":"datacollector\/UserGuide\/Origins\/AzureEventHub.html#concept_c1z_15q_1bb","attributes": {"data-id":"concept_c1z_15q_1bb",},"menu": {"hasChildren":true,},"tocID":"concept_c1z_15q_1bb-d46e30006","next":"concept_c1z_15q_1bb-d46e30006",},{"title":"CoAP Server","shortdesc":"\n            <p class=\"shortdesc\">Constrained Application Protocol (CoAP) is a web transfer protocol designed for         machine-to-machine devices. The CoAP\n               Server origin is a multithreaded origin that listens on         a CoAP endpoint and processes the contents of all authorized\n               CoAP requests. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/CoAPServer.html#concept_wfy_ghn_sz","attributes": {"data-id":"concept_wfy_ghn_sz",},"menu": {"hasChildren":true,},"tocID":"concept_wfy_ghn_sz-d46e30288","next":"concept_wfy_ghn_sz-d46e30288",},{"title":"Directory","shortdesc":"\n            <p class=\"shortdesc\">The Directory origin reads data from files in a directory. The origin can use         multiple threads to enable the parallel\n               processing of files. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/Directory.html#concept_qcq_54n_jq","attributes": {"data-id":"concept_qcq_54n_jq",},"menu": {"hasChildren":true,},"tocID":"concept_qcq_54n_jq-d46e30583","next":"concept_qcq_54n_jq-d46e30583",},{"title":"Elasticsearch ","shortdesc":"\n            <p class=\"shortdesc\">The Elasticsearch origin is a multithreaded origin that reads data from an Elasticsearch         cluster, including Elastic\n               Cloud clusters (formerly Found clusters) and Amazon Elasticsearch         Service clusters. The origin generates a record\n               for each Elasticsearch document.\n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/Elasticsearch.html#concept_f1q_vpm_2z","attributes": {"data-id":"concept_f1q_vpm_2z",},"menu": {"hasChildren":true,},"tocID":"concept_f1q_vpm_2z-d46e31855","next":"concept_f1q_vpm_2z-d46e31855",},{"title":"File Tail","shortdesc":"\n            <p class=\"shortdesc\">The File Tail origin reads lines of data as they are written to an active file after         reading related archived files\n               in the same directory. File Tail generates a record for each         line of data.\n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/FileTail.html#concept_n1y_qyp_5q","attributes": {"data-id":"concept_n1y_qyp_5q",},"menu": {"hasChildren":true,},"tocID":"concept_n1y_qyp_5q-d46e32333","next":"concept_n1y_qyp_5q-d46e32333",},{"title":"Google BigQuery","shortdesc":"\n            <p class=\"shortdesc\">The Google BigQuery origin executes a query job and reads the result from Google         BigQuery. </p>\n         ","href":"datacollector\/UserGuide\/Origins\/BigQuery.html#concept_cg3_y3v_q1b","attributes": {"data-id":"concept_cg3_y3v_q1b",},"menu": {"hasChildren":true,},"tocID":"concept_cg3_y3v_q1b-d46e33582","next":"concept_cg3_y3v_q1b-d46e33582",},{"title":"Google Cloud Storage","href":"datacollector\/UserGuide\/Origins\/GCS.html#concept_iyd_wql_nbb","attributes": {"data-id":"concept_iyd_wql_nbb",},"menu": {"hasChildren":true,},"tocID":"concept_iyd_wql_nbb-d46e34052","next":"concept_iyd_wql_nbb-d46e34052",},{"title":"Google Pub\/Sub Subscriber","shortdesc":"\n            <p class=\"shortdesc\">The Google Pub\/Sub Subscriber origin consumes messages from a Google Pub\/Sub         subscription. </p>\n         ","href":"datacollector\/UserGuide\/Origins\/PubSub.html#concept_pjw_qtl_r1b","attributes": {"data-id":"concept_pjw_qtl_r1b",},"menu": {"hasChildren":true,},"tocID":"concept_pjw_qtl_r1b-d46e34614","next":"concept_pjw_qtl_r1b-d46e34614",},{"title":"gRPC Client","shortdesc":"\n            <p class=\"shortdesc\">An origin that processes data from a gRPC server by calling gRPC server methods. The         origin can call Unary RPC and\n               Server Streaming RPC methods. This origin is a <a class=\"xref\" href=\"datacollector\/UserGuide\/Pipeline_Design\/TechPreview.html#concept_prl_qfv_gfb\">Technology Preview</a>         feature. It is not meant for use in production.\n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/gRPCClient.html#concept_yp1_4zs_yfb","attributes": {"data-id":"concept_yp1_4zs_yfb",},"menu": {"hasChildren":true,},"tocID":"concept_yp1_4zs_yfb-d46e35084","next":"concept_yp1_4zs_yfb-d46e35084",},{"title":"Hadoop FS","shortdesc":"\n            <p class=\"shortdesc\">The Hadoop FS origin reads data from the Hadoop Distributed File System (HDFS), Amazon     S3, or other file systems using\n               the Hadoop FileSystem interface. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/HadoopFS-origin.html#concept_lw2_tnm_vs","attributes": {"data-id":"concept_lw2_tnm_vs",},"menu": {"hasChildren":true,},"tocID":"concept_lw2_tnm_vs-d46e35144","next":"concept_lw2_tnm_vs-d46e35144",},{"title":"Hadoop FS Standalone","shortdesc":"\n            <p class=\"shortdesc\">The Hadoop FS Standalone origin reads files in HDFS. You can also use the origin to         read from Azure Data Lake Storage\n               or Azure HDInsight. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/HDFSStandalone.html#concept_djz_pdm_hdb","attributes": {"data-id":"concept_djz_pdm_hdb",},"menu": {"hasChildren":true,},"tocID":"concept_djz_pdm_hdb-d46e35723","next":"concept_djz_pdm_hdb-d46e35723",},{"title":"HTTP Client","href":"datacollector\/UserGuide\/Origins\/HTTPClient.html#concept_wk4_bjz_5r","attributes": {"data-id":"concept_wk4_bjz_5r",},"menu": {"hasChildren":true,},"tocID":"concept_wk4_bjz_5r-d46e37708","next":"concept_wk4_bjz_5r-d46e37708",},{"title":"HTTP Server","shortdesc":"\n            <p class=\"shortdesc\">The HTTP Server origin is a multithreaded origin that listens on an HTTP endpoint and         processes the contents of all\n               authorized HTTP POST and PUT requests. Use the HTTP Server         origin to read high volumes of HTTP POST and PUT requests\n               using multiple threads. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/HTTPServer.html#concept_s2p_5hb_4y","attributes": {"data-id":"concept_s2p_5hb_4y",},"menu": {"hasChildren":true,},"tocID":"concept_s2p_5hb_4y-d46e40106","next":"concept_s2p_5hb_4y-d46e40106",},{"title":"HTTP to Kafka (Deprecated)","href":"datacollector\/UserGuide\/Origins\/HTTPtoKafka.html#concept_izh_mqd_dy","attributes": {"data-id":"concept_izh_mqd_dy",},"menu": {"hasChildren":true,},"tocID":"concept_izh_mqd_dy-d46e40573","next":"concept_izh_mqd_dy-d46e40573",},{"title":"JDBC Multitable Consumer","href":"datacollector\/UserGuide\/Origins\/MultiTableJDBCConsumer.html#concept_zp3_wnw_4y","attributes": {"data-id":"concept_zp3_wnw_4y",},"menu": {"hasChildren":true,},"tocID":"concept_zp3_wnw_4y-d46e41134","next":"concept_zp3_wnw_4y-d46e41134",},{"title":"JDBC Query Consumer","href":"datacollector\/UserGuide\/Origins\/JDBCConsumer.html#concept_qhf_hjr_bs","attributes": {"data-id":"concept_qhf_hjr_bs",},"menu": {"hasChildren":true,},"tocID":"concept_qhf_hjr_bs-d46e45000","next":"concept_qhf_hjr_bs-d46e45000",},{"title":"JMS Consumer","shortdesc":"\n            <p class=\"shortdesc\">The JMS Consumer origin reads data from a Java Messaging Service (JMS). </p>\n         ","href":"datacollector\/UserGuide\/Origins\/JMS.html#concept_rhh_4nj_dt","attributes": {"data-id":"concept_rhh_4nj_dt",},"menu": {"hasChildren":true,},"tocID":"concept_rhh_4nj_dt-d46e46762","next":"concept_rhh_4nj_dt-d46e46762",},{"title":"Kafka Consumer","href":"datacollector\/UserGuide\/Origins\/KConsumer.html#concept_msz_wnr_5q","attributes": {"data-id":"concept_msz_wnr_5q",},"menu": {"hasChildren":true,},"tocID":"concept_msz_wnr_5q-d46e47133","next":"concept_msz_wnr_5q-d46e47133",},{"title":"Kafka Multitopic Consumer","href":"datacollector\/UserGuide\/Origins\/KafkaMultiConsumer.html#concept_ccs_fn4_x1b","attributes": {"data-id":"concept_ccs_fn4_x1b",},"menu": {"hasChildren":true,},"tocID":"concept_ccs_fn4_x1b-d46e47817","next":"concept_ccs_fn4_x1b-d46e47817",},{"title":"Kinesis Consumer","shortdesc":"\n            <p class=\"shortdesc\">The Kinesis Consumer origin reads data from Amazon Kinesis Streams. </p>\n         ","href":"datacollector\/UserGuide\/Origins\/KinConsumer.html#concept_anh_4y3_yr","attributes": {"data-id":"concept_anh_4y3_yr",},"menu": {"hasChildren":true,},"tocID":"concept_anh_4y3_yr-d46e48620","next":"concept_anh_4y3_yr-d46e48620",},{"title":"MapR DB CDC","href":"datacollector\/UserGuide\/Origins\/MapRdbCDC.html#concept_qwj_5vm_pbb","attributes": {"data-id":"concept_qwj_5vm_pbb",},"menu": {"hasChildren":true,},"tocID":"concept_qwj_5vm_pbb-d46e49093","next":"concept_qwj_5vm_pbb-d46e49093",},{"title":"MapR DB JSON","shortdesc":"\n            <p class=\"shortdesc\">The MapR DB JSON origin reads JSON documents from MapR DB JSON tables. The origin         converts each document into a record.</p>\n         ","href":"datacollector\/UserGuide\/Origins\/MapRDBJSON.html#concept_ywh_k15_3y","attributes": {"data-id":"concept_ywh_k15_3y",},"menu": {"hasChildren":true,},"tocID":"concept_ywh_k15_3y-d46e49375","next":"concept_ywh_k15_3y-d46e49375",},{"title":"MapR FS","shortdesc":"\n            <p class=\"shortdesc\">The MapR FS origin reads files from MapR FS. Use this origin only in pipelines         configured for cluster batch pipeline\n               execution mode. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/MapRFS.html#concept_psz_db4_lx","attributes": {"data-id":"concept_psz_db4_lx",},"menu": {"hasChildren":true,},"tocID":"concept_psz_db4_lx-d46e49477","next":"concept_psz_db4_lx-d46e49477",},{"title":"MapR FS Standalone","shortdesc":"\n            <p class=\"shortdesc\">The MapR FS Standalone origin reads files in MapR. The origin can use multiple         threads to enable the parallel processing\n               of files. The files to be processed must all share         a file name pattern and be fully written. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/MapRFSStandalone.html#concept_b43_3qc_mdb","attributes": {"data-id":"concept_b43_3qc_mdb",},"menu": {"hasChildren":true,},"tocID":"concept_b43_3qc_mdb-d46e49863","next":"concept_b43_3qc_mdb-d46e49863",},{"title":"MapR Multitopic Streams Consumer","href":"datacollector\/UserGuide\/Origins\/MapRStreamsMultiConsumer.html#concept_hvd_hww_lbb","attributes": {"data-id":"concept_hvd_hww_lbb",},"menu": {"hasChildren":true,},"tocID":"concept_hvd_hww_lbb-d46e51476","next":"concept_hvd_hww_lbb-d46e51476",},{"title":"MapR Streams Consumer","shortdesc":"\n            <p class=\"shortdesc\">The MapR Streams Consumer origin reads messages from MapR Streams.</p>\n         ","href":"datacollector\/UserGuide\/Origins\/MapRStreamsCons.html#concept_cvy_xsf_2v","attributes": {"data-id":"concept_cvy_xsf_2v",},"menu": {"hasChildren":true,},"tocID":"concept_cvy_xsf_2v-d46e51937","next":"concept_cvy_xsf_2v-d46e51937",},{"title":"MongoDB","href":"datacollector\/UserGuide\/Origins\/MongoDB.html#concept_bk4_2rs_ns","attributes": {"data-id":"concept_bk4_2rs_ns",},"menu": {"hasChildren":true,},"tocID":"concept_bk4_2rs_ns-d46e52229","next":"concept_bk4_2rs_ns-d46e52229",},{"title":"MongoDB Oplog","href":"datacollector\/UserGuide\/Origins\/MongoDBOplog.html#concept_mjn_yqw_4y","attributes": {"data-id":"concept_mjn_yqw_4y",},"menu": {"hasChildren":true,},"tocID":"concept_mjn_yqw_4y-d46e52790","next":"concept_mjn_yqw_4y-d46e52790",},{"title":"MQTT Subscriber","shortdesc":"\n            <p class=\"shortdesc\">The MQTT Subscriber origin subscribes to topics on an MQTT broker to read messages         from the broker. The origin functions\n               as an MQTT client that receives messages, generating a         record for each message.\n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/MQTTSubscriber.html#concept_ukz_3vt_lz","attributes": {"data-id":"concept_ukz_3vt_lz",},"menu": {"hasChildren":true,},"tocID":"concept_ukz_3vt_lz-d46e53248","next":"concept_ukz_3vt_lz-d46e53248",},{"title":"MySQL Binary Log","href":"datacollector\/UserGuide\/Origins\/MySQLBinaryLog.html#concept_kqg_1yh_xx","attributes": {"data-id":"concept_kqg_1yh_xx",},"menu": {"hasChildren":true,},"tocID":"concept_kqg_1yh_xx-d46e53468","next":"concept_kqg_1yh_xx-d46e53468",},{"title":"Omniture","shortdesc":"\n            <p class=\"shortdesc\">The Omniture origin processes JSON website usage reports generated by the Omniture   reporting APIs. Omniture is also known\n               as the Adobe Marketing Cloud.\n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/Omniture.html#concept_dsr_xmw_1s","attributes": {"data-id":"concept_dsr_xmw_1s",},"menu": {"hasChildren":true,},"tocID":"concept_dsr_xmw_1s-d46e54038","next":"concept_dsr_xmw_1s-d46e54038",},{"title":"OPC UA Client ","href":"datacollector\/UserGuide\/Origins\/OPCUAClient.html#concept_nmf_1ly_f1b","attributes": {"data-id":"concept_nmf_1ly_f1b",},"menu": {"hasChildren":true,},"tocID":"concept_nmf_1ly_f1b-d46e54095","next":"concept_nmf_1ly_f1b-d46e54095",},{"title":"Oracle CDC Client","href":"datacollector\/UserGuide\/Origins\/OracleCDC.html#concept_rs5_hjj_tw","attributes": {"data-id":"concept_rs5_hjj_tw",},"menu": {"hasChildren":true,},"tocID":"concept_rs5_hjj_tw-d46e54307","next":"concept_rs5_hjj_tw-d46e54307",},{"title":"PostgreSQL CDC Client","shortdesc":"\n            <p class=\"shortdesc\">The PostgreSQL CDC Client origin processes Write-Ahead Logging (WAL) data to generate         change data capture records\n               for a PostgreSQL database. Use the PostgreSQL CDC Client origin         to process WAL data from PostgreSQL 9.4 or later.\n               Earlier versions do not support         WAL.\n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/PostgreSQL.html#concept_cfs_4m4_n2b","attributes": {"data-id":"concept_cfs_4m4_n2b",},"menu": {"hasChildren":true,},"tocID":"concept_cfs_4m4_n2b-d46e58449","next":"concept_cfs_4m4_n2b-d46e58449",},{"title":"Pulsar Consumer","shortdesc":"\n            <p class=\"shortdesc\">The Pulsar Consumer origin reads messages from one or more topics in an Apache Pulsar         cluster.</p>\n         ","href":"datacollector\/UserGuide\/Origins\/PulsarConsumer.html#concept_o2b_1pc_r2b","attributes": {"data-id":"concept_o2b_1pc_r2b",},"menu": {"hasChildren":true,},"tocID":"concept_o2b_1pc_r2b-d46e58918","next":"concept_o2b_1pc_r2b-d46e58918",},{"title":"RabbitMQ Consumer","shortdesc":"\n            <p class=\"shortdesc\">RabbitMQ Consumer reads AMQP messages from a single RabbitMQ queue.</p>\n         ","href":"datacollector\/UserGuide\/Origins\/RabbitMQ.html#concept_dyg_lq1_h5","attributes": {"data-id":"concept_dyg_lq1_h5",},"menu": {"hasChildren":true,},"tocID":"concept_dyg_lq1_h5-d46e59395","next":"concept_dyg_lq1_h5-d46e59395",},{"title":"Redis Consumer","shortdesc":"\n            <p class=\"shortdesc\">The Redis Consumer origin reads messages from Redis. </p>\n         ","href":"datacollector\/UserGuide\/Origins\/Redis.html#concept_plr_t3v_jw","attributes": {"data-id":"concept_plr_t3v_jw",},"menu": {"hasChildren":true,},"tocID":"concept_plr_t3v_jw-d46e59615","next":"concept_plr_t3v_jw-d46e59615",},{"title":"REST Service ","href":"datacollector\/UserGuide\/Origins\/RESTService.html#concept_hfg_2sn_p2b","attributes": {"data-id":"concept_hfg_2sn_p2b",},"menu": {"hasChildren":true,},"tocID":"concept_hfg_2sn_p2b-d46e59769","next":"concept_hfg_2sn_p2b-d46e59769",},{"title":"Salesforce","href":"datacollector\/UserGuide\/Origins\/Salesforce.html#concept_odf_vr3_rx","attributes": {"data-id":"concept_odf_vr3_rx",},"menu": {"hasChildren":true,},"tocID":"concept_odf_vr3_rx-d46e60449","next":"concept_odf_vr3_rx-d46e60449",},{"title":"SDC RPC ","shortdesc":"\n            <p class=\"shortdesc\"> The SDC RPC origin enables connectivity between two SDC RPC pipelines. The SDC RPC     origin reads data passed from an SDC\n               RPC destination. Use the SDC RPC origin as part of an SDC     RPC destination pipeline.\n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/SDC_RPCorigin.html#concept_agb_5c1_ct","attributes": {"data-id":"concept_agb_5c1_ct",},"menu": {"hasChildren":true,},"tocID":"concept_agb_5c1_ct-d46e63047","next":"concept_agb_5c1_ct-d46e63047",},{"title":"SDC RPC to Kafka (Deprecated)","href":"datacollector\/UserGuide\/Origins\/SDCRPCtoKafka.html#concept_tdk_slk_pw","attributes": {"data-id":"concept_tdk_slk_pw",},"menu": {"hasChildren":true,},"tocID":"concept_tdk_slk_pw-d46e63105","next":"concept_tdk_slk_pw-d46e63105",},{"title":"SFTP\/FTP Client","shortdesc":"\n            <p class=\"shortdesc\">The SFTP\/FTP Client origin reads files from a server using the Secure File Transfer         Protocol (SFTP) or the File Transfer\n               Protocol (FTP). \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/SFTP.html#concept_ic5_bzd_5v","attributes": {"data-id":"concept_ic5_bzd_5v",},"menu": {"hasChildren":true,},"tocID":"concept_ic5_bzd_5v-d46e63785","next":"concept_ic5_bzd_5v-d46e63785",},{"title":"SQL Server CDC Client","href":"datacollector\/UserGuide\/Origins\/SQLServerCDC.html#concept_ut3_ywc_v1b","attributes": {"data-id":"concept_ut3_ywc_v1b",},"menu": {"hasChildren":true,},"tocID":"concept_ut3_ywc_v1b-d46e64352","next":"concept_ut3_ywc_v1b-d46e64352",},{"title":"SQL Server Change Tracking","href":"datacollector\/UserGuide\/Origins\/SQLServerChange.html#concept_ewq_b2s_r1b","attributes": {"data-id":"concept_ewq_b2s_r1b",},"menu": {"hasChildren":true,},"tocID":"concept_ewq_b2s_r1b-d46e65746","next":"concept_ewq_b2s_r1b-d46e65746",},{"title":"System Metrics","shortdesc":"\n            <p class=\"shortdesc\">The System Metrics origin reads system metrics from the edge device where <span class=\"ph\">StreamSets</span>         <span class=\"ph\">Data Collector Edge</span>             (<span class=\"ph\">SDC Edge</span>)         is installed. Use the System Metrics origin only in pipelines configured for edge execution         mode. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/SystemMetrics.html#concept_gzy_gmv_32b","attributes": {"data-id":"concept_gzy_gmv_32b",},"menu": {"hasChildren":true,},"tocID":"concept_gzy_gmv_32b-d46e66823","next":"concept_gzy_gmv_32b-d46e66823",},{"title":"TCP Server","href":"datacollector\/UserGuide\/Origins\/TCPServer.html#concept_ppm_xb1_4z","attributes": {"data-id":"concept_ppm_xb1_4z",},"menu": {"hasChildren":true,},"tocID":"concept_ppm_xb1_4z-d46e66989","next":"concept_ppm_xb1_4z-d46e66989",},{"title":"UDP Multithreaded Source","href":"datacollector\/UserGuide\/Origins\/UDPMulti.html#concept_wng_g5f_5bb","attributes": {"data-id":"concept_wng_g5f_5bb",},"menu": {"hasChildren":true,},"tocID":"concept_wng_g5f_5bb-d46e67447","next":"concept_wng_g5f_5bb-d46e67447",},{"title":"UDP Source","href":"datacollector\/UserGuide\/Origins\/UDP.html#concept_rst_2y5_1s","attributes": {"data-id":"concept_rst_2y5_1s",},"menu": {"hasChildren":true,},"tocID":"concept_rst_2y5_1s-d46e67812","next":"concept_rst_2y5_1s-d46e67812",},{"title":"UDP to Kafka (Deprecated)","href":"datacollector\/UserGuide\/Origins\/UDPtoKafka.html#concept_jzq_jcz_pw","attributes": {"data-id":"concept_jzq_jcz_pw",},"menu": {"hasChildren":true,},"tocID":"concept_jzq_jcz_pw-d46e67960","next":"concept_jzq_jcz_pw-d46e67960",},{"title":"WebSocket Client","shortdesc":"\n            <p class=\"shortdesc\">The WebSocket Client origin reads data from a WebSocket server endpoint. Use the         origin to read data from a WebSocket\n               resource URL. The origin can also <span class=\"ph\">send responses back to the origin system when used in a                         microservice pipeline.</span></p>\n         ","href":"datacollector\/UserGuide\/Origins\/WebSocketClient.html#concept_unk_nzk_fbb","attributes": {"data-id":"concept_unk_nzk_fbb",},"menu": {"hasChildren":true,},"tocID":"concept_unk_nzk_fbb-d46e68421","next":"concept_unk_nzk_fbb-d46e68421",},{"title":"WebSocket Server","shortdesc":"\n            <p class=\"shortdesc\">The WebSocket Server origin is a multithreaded origin that listens on a WebSocket         endpoint and processes the contents\n               of all authorized WebSocket client requests. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/WebSocketServer.html#concept_u2r_gpc_3z","attributes": {"data-id":"concept_u2r_gpc_3z",},"menu": {"hasChildren":true,},"tocID":"concept_u2r_gpc_3z-d46e68661","next":"concept_u2r_gpc_3z-d46e68661",},{"title":"Windows Event Log","shortdesc":"\n            <p class=\"shortdesc\">The Windows Event Log origin reads data from a Microsoft Windows event log located on a         Windows machine. The origin\n               generates a record for each event in the log. \n            </p>\n         ","href":"datacollector\/UserGuide\/Origins\/WindowsLog.html#concept_agf_5jv_sbb","attributes": {"data-id":"concept_agf_5jv_sbb",},"menu": {"hasChildren":true,},"tocID":"concept_agf_5jv_sbb-d46e69154","next":"concept_agf_5jv_sbb-d46e69154",}]});