document.write('\
	  <!-- Dropdown Structure -->\
  <ul id="dropdown1" class="dropdown-content">\
    <li><a href="../../arcade/error"><i class="mdi-alert-error left tiny"></i>Arcade Errors</a></li>\
    <li><a href="../../arcade/training"><i class="mdi-social-group-add left tiny"></i>Arcade Training</a></li>\
    <li><a href="../../arcade/closing"><i class="mdi-device-access-time left tiny"></i>Arcade Closing</a></li>\
    <li class="divider"></li>\
    <li><a href="../../cc/error"><i class="mdi-alert-error left tiny"></i>CC Errors</a></li>\
    <li class="divider"></li>\
    <li><a href="../../other/error"><i class="mdi-alert-error left tiny"></i>Other Errors</a></li>\
  </ul>\
\
  <nav class="blue darken-1" role="navigation">\
    <div class="container">\
      <div class="nav-wrapper">\
        <a id="logo-container" href="../../" class="brand-logo"><img src="../../img/PTLogo.png" style="height:50px"></a>\
        <ul class="right hide-on-med-and-down">\
          <li><a class="dropdown-button" href="#!" data-activates="dropdown1">QuickLinks<i class="mdi-navigation-arrow-drop-down right"></i></a></li>\
        </ul>\
\
<!--begin mobile nav-->\
\
      <ul id="slide-out" class="side-nav">\
        <li><p class="center"><a href="../"><i class="mdi-action-home medium"></i></a></p></li>\
        <li class="no-padding">\
          <ul class="collapsible collapsible-accordion">\
            <li>\
              <a class="collapsible-header">Arcade<i class="mdi-navigation-arrow-drop-down"></i></a>\
              <div class="collapsible-body">\
                <ul>\
                  <li><a href="../../arcade/error"><i class="mdi-alert-error left small"></i>Error Reporting</a></li>\
                  <li><a href="../../arcade/training"><i class="mdi-social-group-add left small"></i>Training Checklist</a></li>\
                  <li><a href="../../arcade/closing"><i class="mdi-device-access-time left small"></i>Closing Procedures</a></li>\
                </ul>\
              </div>\
            </li>\
          </ul>\
        </li>\
        <li class="no-padding">\
         <ul class="collapsible collapsible-accordion">\
           <li>\
             <a class="collapsible-header">Control Counter<i class="mdi-navigation-arrow-drop-down"></i></a>\
             <div class="collapsible-body">\
               <ul>\
                 <li><a href="../../cc/error"><i class="mdi-alert-error left small"></i>Error Reporting</a></li>\
                 <li><a href="../../cc/training"><i class="mdi-social-group-add left small"></i>Training Checklist</a></li>\
                 <li><a href="../../cc/closing"><i class="mdi-device-access-time left small"></i>Closing Procedures</a></li>\
               </ul>\
             </div>\
           </li>\
         </ul>\
       </li>\
       <li class="no-padding">\
         <ul class="collapsible collapsible-accordion">\
           <li>\
             <a class="collapsible-header">Other<i class="mdi-navigation-arrow-drop-down"></i></a>\
             <div class="collapsible-body">\
               <ul>\
                 <li><a href="../../other/error"><i class="mdi-alert-error left small"></i>Error Reporting</a></li>\
                 <li><a href="../../other/training"><i class="mdi-social-group-add left small"></i>Training Checklist</a></li>\
                 <li><a href="../../other/closing"><i class="mdi-device-access-time left small"></i>Closing Procedures</a></li>\
               </ul>\
             </div>\
           </li>\
         </ul>\
       </li>\
     </ul>\
 <a href="#" data-activates="slide-out" class="button-collapse"><i class="mdi-navigation-menu"></i></a>\
\
<!--end mobile nav-->\
\
      </div>\
    </div>\
  </nav> <!--end nav-->\
\
	');