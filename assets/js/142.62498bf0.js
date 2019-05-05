(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{360:function(a,e,s){"use strict";s.r(e);var t=s(2),o=Object(t.a)({},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"how-to-update-komodo-for-notary-nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-update-komodo-for-notary-nodes","aria-hidden":"true"}},[a._v("#")]),a._v(" How to update Komodo (for Notary Nodes)")]),a._v(" "),s("p",[a._v("Reboot your node (to start clean).")]),a._v(" "),s("p",[a._v("If you already have installed Komodo from it's source code on your machine, and need to update to the latest version, follow the below steps.")]),a._v(" "),s("p",[a._v("Please follow each step carefully and don't skip to the next one until the previous step is successfully completed. If you have the "),s("code",[a._v("komodo daemon")]),a._v(" running, you can leave it running while updating if you have enough resources in your machine. If you prefer to stop it before updating, please use "),s("code",[a._v("~/komodo/src/komodo-cli stop")]),a._v(" to stop the daemon and proceed with the following steps to update.")]),a._v(" "),s("ol",[s("li",[a._v("Navigate to your komodo directory")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~/komodo\n")])])]),s("ol",[s("li",[a._v("Make sure you don't have any changes made to the source and reset it. This will ensure clean source and shouldn't create issues while pulling the latest source in the next step.")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset --hard\n")])])]),s("ol",[s("li",[a._v("Clean the source directory")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean\n")])])]),s("ol",[s("li",[a._v("Update the source. (If you have any changes made to the source code, this command may not pull the latest source. Please make sure you have followed the previous steps)")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull\n")])])]),s("ol",[s("li",[a._v("Compile the latest binary")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./zcutil/build.sh -j"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("nproc"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),s("p",[a._v("Start your sevices as usual. If you didn't stop the deamon before compiling, please stop it using "),s("code",[a._v("~/komodo/src/komodo-cli stop")]),a._v(" and start again.")]),a._v(" "),s("p",[a._v("After that, go to your .komodo folder")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~/.komodo\n")])])]),s("p",[a._v("Remove the following files")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf blocks chainstate debug.log komodostate db.log\n")])])]),s("p",[a._v("Go back to you home folder")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~\n")])])]),s("p",[a._v("Run your start script")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./start\n")])])]),s("p",[a._v("Let it resync (check with the getinfo command). When it is done resync, start Iguana")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~/KomodoPlatform/iguana\n./m_notary\n")])])]),s("p",[a._v("Your Komodo installation is now uptodate.")]),a._v(" "),s("h2",{attrs:{id:"problems"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#problems","aria-hidden":"true"}},[a._v("#")]),a._v(" Problems?")]),a._v(" "),s("p",[a._v("I receive the following error when i do "),s("code",[a._v("./zcutil/build.sh -j8")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("EXCEPTION: St13runtime_error\ncould not load param "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" at /home/j/.zcash-params/sprout-verifying.key\nKomodo "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" AppInit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("You have to do "),s("code",[a._v("./zcutil/fetch-params.sh")]),a._v(" first and after that "),s("code",[a._v("./zcutil/build.sh -j8")])])])},[],!1,null,null,null);e.default=o.exports}}]);