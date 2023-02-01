import{_ as t,c as e,o as s,a as o}from"./app.39d97273.js";const a="/assets/radio-buttons.c09aabdc.png",u=JSON.parse('{"title":"RadioButton","description":"","frontmatter":{},"headers":[{"level":2,"title":"Styles","slug":"styles","link":"#styles","children":[]},{"level":2,"title":"Examples","slug":"examples","link":"#examples","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]},{"level":2,"title":"RadioButtonItem Properties","slug":"radiobuttonitem-properties","link":"#radiobuttonitem-properties","children":[]},{"level":2,"title":"RadioButtonItem Events","slug":"radiobuttonitem-events","link":"#radiobuttonitem-events","children":[]}],"relativePath":"radio-button.md","lastUpdated":1675239651000}'),n={name:"radio-button.md"},l=o('<h1 id="radiobutton" tabindex="-1">RadioButton <a class="header-anchor" href="#radiobutton" aria-hidden="true">#</a></h1><p>Radio buttons allow users to select one option from a set.</p><p><img src="'+a+`" alt=""></p><h2 id="styles" tabindex="-1">Styles <a class="header-anchor" href="#styles" aria-hidden="true">#</a></h2><p>There are 2 Styles of radio buttons: 1. Horizontal, 2. Vertical.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">RadioButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Orientation</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Horizontal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">RadioButtonItem</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item 1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">RadioButtonItem</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item 2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">RadioButtonItem</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item 3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">RadioButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">RadioButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Orientation</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Vertical</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">RadioButtonItem</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item 1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">RadioButtonItem</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item 2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">RadioButtonItem</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item 3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">mdc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">RadioButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>name</th><th>type</th><th>default</th><th>describes</th></tr></thead><tbody><tr><td>Items</td><td><code>ItemCollection&lt;RadioButtonItem&gt;</code></td><td></td><td>RadioButton&#39;s items.</td></tr><tr><td>selectedIndex</td><td>int</td><td>-1</td><td>RadioButton&#39;s selected index.</td></tr><tr><td>Orientation</td><td>StackOrientation</td><td>Horizontal</td><td>RadioButton&#39;s item orientation.</td></tr><tr><td>Spacing</td><td>double</td><td>0</td><td>Adjustment RadioButton&#39;s HorizontalSpacing and VerticalSpacing.</td></tr><tr><td>HorizontalSpacing</td><td>double</td><td>0</td><td>RadioButton&#39;s horizontal spacing .</td></tr><tr><td>VerticalSpacing</td><td>double</td><td>0</td><td>RadioButton&#39;s vertical spacing.</td></tr><tr><td>Command</td><td>ICommand</td><td></td><td>executed when the button is SelectedIndexChanged.</td></tr><tr><td>CommandParameter</td><td>object</td><td></td><td>Command&#39;s parameter.</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>name</th><th>type</th></tr></thead><tbody><tr><td>SelectedIndexChanged</td><td><code>EventHandler&lt;SelectedIndexChangedEventArgs&gt;</code></td></tr></tbody></table><h2 id="radiobuttonitem-properties" tabindex="-1">RadioButtonItem Properties <a class="header-anchor" href="#radiobuttonitem-properties" aria-hidden="true">#</a></h2><table><thead><tr><th>name</th><th>type</th><th>default</th><th>describes</th></tr></thead><tbody><tr><td>OnColor</td><td>Color</td><td>style</td><td>RadioButtonItem&#39;s actived color.</td></tr><tr><td>IsSelected</td><td>bool</td><td>false</td><td>RadioButtonItem&#39;s selected state.</td></tr><tr><td>Text</td><td>string</td><td>empty</td><td>RadioButtonItem&#39;s text.</td></tr><tr><td>BackgroundColour</td><td>Color</td><td>style</td><td>RadioButtonItem&#39;s background color.</td></tr><tr><td>ForegroundColor</td><td>Color</td><td>style</td><td>RadioButtonItem&#39;s foreground color.</td></tr><tr><td>FontFamily</td><td>string</td><td></td><td>font family of the RadioButtonItem&#39;s text.</td></tr><tr><td>FontSize</td><td>float</td><td>14</td><td>font size of the RadioButtonItem&#39;s text.</td></tr><tr><td>FontWeight</td><td>int</td><td>400</td><td>font weight of the RadioButtonItem&#39;s text.</td></tr><tr><td>FontItalic</td><td>bool</td><td>false</td><td>enable font italic of the RadioButtonItem&#39;s text.</td></tr><tr><td>RippleColor</td><td>Color</td><td>style</td><td>RadioButtonItem&#39;s items ripple color.</td></tr></tbody></table><h2 id="radiobuttonitem-events" tabindex="-1">RadioButtonItem Events <a class="header-anchor" href="#radiobuttonitem-events" aria-hidden="true">#</a></h2><table><thead><tr><th>name</th><th>type</th></tr></thead><tbody><tr><td>SelectedChanged</td><td><code>EventHandler&lt;SelectedChangedEventArgs&gt;</code></td></tr><tr><td>Clicked</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr><tr><td>Pressed</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr><tr><td>Released</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr><tr><td>Moved</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr><tr><td>LongPressed</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr><tr><td>Entered</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr><tr><td>Exited</td><td><code>EventHandler&lt;SKTouchEventArgs&gt;</code></td></tr></tbody></table>`,15),d=[l];function r(p,c,i,F,D,y){return s(),e("div",null,d)}const m=t(n,[["render",r]]);export{u as __pageData,m as default};