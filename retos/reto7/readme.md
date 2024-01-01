<div class="text-lg leading-relaxed text-gray-200 [&amp;>blockquote]:italic [&amp;>blockquote]:text-yellow-400 [&amp;>blockquote]:text-lg [&amp;>p]:text-lg [&amp;>p>strong]:text-yellow-300 [&amp;>h2]:font-bold [&amp;>ul]:pl-4 [&amp;>ol]:list-decimal [&amp;>ol]:list-inside [&amp;>ol]:text-yellow-300 [&amp;>ol]:text-lg [&amp;>ul]:mb-2 [&amp;>ul]:text-yellow-300 [&amp;>ul]:text-lg [&amp;>p>small>a:hover]:underline [&amp;>p>small]:block [&amp;>p>small]:pt-4 [&amp;>p>small]:text-gray-400 [&amp;>ul]:list-disc"><p>Santa está experimentando con nuevos diseños de regalos y <strong>necesita tu ayuda para visualizarlos en 3D</strong>.</p>
<p>Tu tarea es escribir una función que, dado un tamaño <code>n</code> (entero), <strong>genere un dibujo de un regalo en 3D</strong> utilizando caracteres ASCII.</p>
<p>Las líneas de los regalos se dibujan con <code>#</code> y las caras con el símbolo que nos pasan como parámetro:</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-func">drawGift</span>(<span class="shj-syn-num">4</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'+'</span>)

<span class="shj-syn-cmnt">/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/</span>

<span class="shj-syn-func">drawGift</span>(<span class="shj-syn-num">5</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'*'</span>)
<span class="shj-syn-cmnt">/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/</span>

<span class="shj-syn-func">drawGift</span>(<span class="shj-syn-num">1</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'^'</span>)
<span class="shj-syn-cmnt">/*
#
*/</span>
</code></pre>
<p>Importante: Nos han dicho que <strong>siempre hay que dejar un salto de línea al final del dibujo</strong>.</p>
<p><strong>Nota</strong>: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter <code>"</code>.</p></div>