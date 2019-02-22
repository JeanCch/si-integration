/* <![CDATA[ */
/*
|-----------------------------------------------------------------------
|  jQuery Toggle Script by Matt - skyminds.net
|-----------------------------------------------------------------------
|
| Affiche/cache le contenu d'un bloc une fois qu'un lien est cliqué.
|
*/

// On attend que la page soit chargée
jQuery(document).ready(function()
{
   // On cache la zone de texte
   jQuery('#toggle').hide();
   // toggle() lorsque le lien avec l'ID #toggler est cliqué
   jQuery('a#toggler').click(function()
  {
      jQuery('#toggle').toggle(400);
      return false;
   });
});
/* ]]> */


	$(function(){
	$(window).scroll(
	function () {//Au scroll dans la fenetre on déclenche la fonction
	if ($(this).scrollTop() > 60) { //si on a défini de plus de 60 px du haut vers le bas
	$('#Barre_achat').addClass("fixtop"); //on ajoute la classe "fixtop" à <div id="barre_achat">
	} else {
	$('#Barre_achat').removeClass("fixtop");//sinon on retire la classe "fixtop" à <div id="barre_achat">
						}
					}
				);
			});
/*
    /// Slider Slick///

      $(document).ready(function(){
        $('.your-class').slick({
          setting-name: setting-value
        });
      });
*/
