---
sidebar: auto
---

# Scss 中 RGB 与 HSV 的互相转换

## element-ui 和ant-design 的调色盘对比

现在框架中常用的 css 预编译通常会选择 scss 或者 less，设置常用变量，如 默认色（primary）、成功色（success）、错误色（error）、警告色（warning）、信息色（info），并且使用这些变量，将它们变亮或变暗，变深或变浅，以形成一个默认的调色盘，用于各类不同情况下的交互，如禁用态（:disabeld）或者鼠标悬浮（:hover）时颜色浅一点，如激活（:active）和聚焦（:focus）时加深颜色。
element-ui 和 ant-design 正是采用这样的方案。

但是 element-ui 和 ant-design 所使用的预编译语言不一样，其中 element-ui 使用的是 scss，ant-design 使用的是 less，这也决定了他们两个使用的调色方案不一样。

### element-ui (scss) 调色方案
element-ui 采用的默认主题颜色 Primary #409EFF，并且通过 scss 的 mix(color1, color2, weight) 方法进行调色，表示把两种颜色混合起来。 weight 参数必须是 0% 到 100%。默认 weight 为 50%，表明新颜色各取 50% color1 和 color2 的色值相加。如果 weight 为 25%，那表明新颜色为 25% color1 和 75% color2 的色值相加。

```scss
$--color-primary: #409EFF !default;
$--color-primary-light-1: mix($--color-white, $--color-primary, 10%) !default;
$--color-primary-light-2: mix($--color-white, $--color-primary, 20%) !default;
$--color-primary-light-3: mix($--color-white, $--color-primary, 30%) !default;
$--color-primary-light-4: mix($--color-white, $--color-primary, 40%) !default;
$--color-primary-light-5: mix($--color-white, $--color-primary, 50%) !default;
$--color-primary-light-6: mix($--color-white, $--color-primary, 60%) !default;
$--color-primary-light-7: mix($--color-white, $--color-primary, 70%) !default;
$--color-primary-light-8: mix($--color-white, $--color-primary, 80%) !default;
$--color-primary-light-9: mix($--color-white, $--color-primary, 90%) !default;
```

### ant-design (less) 调色方案

ant-design 采用的默认主题颜色 Primary #1890ff，并且通过自定义的一个 colorPalette(color, step) 进行调色，其中 step 决定了颜色是变暗还是变亮，小于等于 6 时，将调亮颜色，并且根据 step
改变 HSV 下的 Hue、Saturation、Value 的三个变量

```less
@blue-base: #1890ff;
@blue-1: color(~`colorPalette('@{blue-6}', 1) `);
@blue-2: color(~`colorPalette('@{blue-6}', 2) `);
@blue-3: color(~`colorPalette('@{blue-6}', 3) `);
@blue-4: color(~`colorPalette('@{blue-6}', 4) `);
@blue-5: color(~`colorPalette('@{blue-6}', 5) `);
@blue-6: @blue-base;
@blue-7: color(~`colorPalette('@{blue-6}', 7) `);
@blue-8: color(~`colorPalette('@{blue-6}', 8) `);
@blue-9: color(~`colorPalette('@{blue-6}', 9) `);
@blue-10: color(~`colorPalette('@{blue-6}', 10) `);
```

## scss 下如何实现 ant-design 的调色方案

colorPalette 中最重要的部分在于，将 RGB 或者 HEX 转换成 HSV，并且根据变量调节 Hue、Saturation、Value，但是 scss 并没有 HSV 相关的方法，所以实际的问题就变成了在 scss 下如何实现 RGB 和 HSV 的转换

### RGB 和 HSV 互相转换

直接看相关的公式

RGB转HSV：

<img-con src="/hsv.jpg"></img-con>  

HSV转RGB

<img-con src="/rgb.jpg"></img-con>  

将公式转换成对应的函数

```scss
@function get-hsv($color){
  $r:red($color);
  $g:green($color);
  $b:blue($color);

  $r1:$r / 255;
  $g1:$g / 255;
  $b1:$b / 255;

  $max:max($r1, $g1, $b1);
  $min:min($r1, $g1, $b1);

  $dis:$max - $min;

  $h:0;
  $s:0;
  $v:$max;

  @if $dis == 0 {
    $h:0;
  }@else if $max == $r1 {
    $h:60 * ( (($g1 - $b1) / $dis) + 0 )
  }@else if $max == $g1 {
    $h:60 * ( (($b1 - $r1) / $dis) + 2 )
  }@else if $max == $b1 {
    $h:60 * ( (($r1 - $g1) / $dis) + 4)
  }

  @if $dis == 0 {
    $s:0;
  } @else {
    $s:$dis / $max;
  }
  
  $map:('H':$h, 'S':$s, 'V':$v);

  @return $map;
};

@function set-rgb-map($r, $g, $b){
  $map:('r':$r, 'g':$g, 'b':$b);
  @return $map;
}

@function hsv-to-rgb($hsv){
  $h:map-get($hsv,'H');
  $s:map-get($hsv,'S');
  $v:map-get($hsv,'V');
  
  $h1: floor($h / 60) % 6;
  $f: $h / 60 - $h1;
  $p: $v * (1 - $s);
  $q: $v * (1 - $f * $s);
  $t: $v * (1 - (1 - $f) * $s);
  $rgbmap:();
  @if $h1 == 0 {
    $rgbmap:set-rgb-map($v, $t, $p);
  }@else if $h1 == 1 {
    $rgbmap:set-rgb-map($q, $v, $p);
  }@else if $h1 == 2 {
    $rgbmap:set-rgb-map($p, $v, $t);
  }@else if $h1 == 3 {
    $rgbmap:set-rgb-map($p, $q, $v);
  }@else if $h1 == 4 {
    $rgbmap:set-rgb-map($t, $p, $v);
  }@else if $h1 == 5 {
    $rgbmap:set-rgb-map($v, $p, $q);
  }

  $r:round(map-get($rgbmap, 'r') * 255);
  $g:round(map-get($rgbmap, 'g') * 255);
  $b:round(map-get($rgbmap, 'b') * 255);

  @return rgb($r, $g, $b);
}
```

### colorPalette 函数

```scss
$hueStep:2;
$saturationStep:16;
$saturationStep2:5;
$brightnessStep1:5;
$brightnessStep2:15;
$lightColorCount:5;
$darkColorCount:4;

@function color-palette($color, $index){
  $isLight:$index <= 6;
  $hsv:get-hsv($color);
  $i:0;
  @if $isLight {
    $i:$lightColorCount + 1 - $index;
  } @else {
    $i:$index - $lightColorCount - 1;
  }
  
  $H:get-hue($hsv, $i, $isLight);
  $S:get-saturation($hsv, $i, $isLight);
  $V:get-value($hsv, $i, $isLight);

  @return hsv-to-rgb(('H':$H, 'S':$S / 100, 'V':$V / 100))
};

@function get-hue($hsv, $i, $isLight){
  $hue:0;
  $h:map-get($hsv, 'H');

  @if $h >= 60 and $h <= 240 {
    @if $isLight {
      $hue:$h - $hueStep * $i;
    }@else{
      $hue:$h + $hueStep * $i;
    }
  } @else {
    @if $isLight {
      $hue:$h + $hueStep * $i;
    }@else{
      $hue:$h - $hueStep * $i;
    }
  }

  @if $hue < 0 {
    $hue:$hue + 360;
  }@else if $hue >= 360 {
    $hue:$hue - 360;
  }

  @return $hue;
};

@function get-saturation($hsv, $i, $isLight){
  $saturation:0;
  $S:map-get($hsv, 'S');

  @if $isLight {
    $saturation:$S * 100 - $saturationStep * $i;
  } @else if $i == $darkColorCount {
    $saturation:$S * 100 + $saturationStep;
  } @else {
    $saturation:$S * 100 + $saturationStep2 * $i;
  };

  @if $saturation > 100 {
    $saturation:100;
  };
  
  @if $isLight and $i == $lightColorCount and $saturation > 10{
    $saturation:10;
  }

  @if $saturation < 6 {
    $saturation:6;
  }
  
  @return $saturation;
};

@function get-value($hsv, $i, $isLight){
  $value:0;
  $V:map-get($hsv, 'V');
  @if $isLight {
    $value:round($V * 100) + $brightnessStep1 * $i;
  } @else {
    $value:round($V * 100) - $brightnessStep2 * $i;
  };

  @if $value / 100 > 1 {
    $value:100
  }
  @return $value;
};
```