piddler
=======

A node module that writes the pid of a node process to a file for delicious programmatic mainpulation


usage
-----

Simply require piddler.  

> var pid = require('piddler');

Then start your app with -P somepath/somefile.pid 

> node myapp -P /var/log/node/myapp.pid

Piddler will look for a -P flag and, if found, write that processes' id to that file.

### Return values

int [pid] - on successful write
bool false - on unsuccessful write
null - if no flag was used to start node app

credits
-------

Smarter people than me from whom I've picked up the rigour of caring enough to control my processes with scripts.  You all rock.
