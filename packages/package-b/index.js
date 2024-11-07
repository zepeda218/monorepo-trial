import packageA from 'package-a';
import _ from 'lodash';


const message = () => {
  packageA();
  
  console.log(_.upperCase('hello from package b!'));
};

message();
