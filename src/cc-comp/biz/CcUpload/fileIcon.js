/*
 * @Author: Li Cai
 * @LastEditors: Li Cai
 * @Connect: 1981824361@qq.com
 * @Date: 2020-10-10 15:55:53
 * @LastEditTime: 2020-10-10 15:56:42
 * @Description: 上传文件图标
 * @FilePath: /FANFANantd/src/cc-comp/biz/CcUpload/fileIcon.js
 */
export const word = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPCSURBVGhD7dpbyE1pHMfxl3DjkEPjeCMkpIgrco4JI0mR3IymXJhJCRfOCoXignLj0ESSQySHxIWZxB1XNFGoqXEOSWTk9P2ttf7693jebdbe71r7ndq/+rTXu55nP3v933ftZz1r9TYVnK6YhGU4hJtYjFadvvgJa3EC9/E5YglaRdpgIOZjKy7gEWIHHVOXQtpjBH7GLlzBK8QO8L8qvJBOGItfsRc38C9iB1OLwgo5gr/wAbEPbmlWyDjMq9Ec/IAksQ8rkhVyDrH2vB6gM6KNRWrpQkRfiWhDkYooRKdptKFIjUIqqGsh1cxaupbFxqxrIdVkIWJjNgqpRSmFaJntswe+XX6Hz0GEfZKBs2jJ49uskP24l9MT+LHMN4VomdIRFn2ob5fwN6p7jbBPN1hUuG+z9xc+a/nf5kSE7aPhoxsn3/4YPrfg20srRL9hixZkvu0t2sGnCz7B+lyGRSvqcDFqhRzFi5zewI9looUchs9TWNs17cjSIXtV7sL66Htlif1Fw1MzT/TecDyJFnIbPn/A2nZqR5Yx2auiW1vr85t2ZFkO229KK+QjdLpY/My1QDuy6CAta2B9pmhHFp0+tt+UVohMhsVPn/21g/TGyXQzyXRYnz7akcWfcsYKGYmpOeVeoqyExc5zfVcss/F3upmkF9TnZfJTmh7wYxorpJRF4zFYbOY6k/yUZhO0r2fyU5qHuJpuJvkRfkxTaiE6JXz011ifbibRIyD10yllOY996WaSdQjHlVILke6w/Ilp6WaSZ1AfX9xmrEg3k5xGOKZYIYuwLaeLiI1ZsRB/4Jq59PhTGQDro4O1zMWMdDOJHgr48YwVUk303tiYFQtZDcsv2auiJ4zW5x/tyDIcQ9LN5PGpH8srvRA/vQ7NXpUd8P00FSu69mhJouh5k+/jlV6In159/JVeZiHMFvg+nhWyCsdz0tPP2JgVCxE/vSpt8Rq+z0aEae5LKVZIabOWzITPMIR9ziLMc4T9TF0K2QAfTZlhH10IfQYh7OPVpRBdL647zU2pOnetz51sX3OsEE0MupPMQ9ep2JjfLaQIVkg10XtjYzYKqYUVouuPVgl5aEkUG7OuhZT6ZS9Co5AKGoXUoqULeYfkOYGW4rEORbFCqrmxCukfFibga3RfrhsprUh1v66rsx4LxQ6kVlZIadESYjyW4gC0DHmP2MHlUXohsegx6SjojnE3riFc1n9PqygkFt2jDIZugbfjEvzz4lCrLaS59IMe5OlW4BTs357+d4XEokdM4V1nC6Sp6QtSRgJM/fjNPgAAAABJRU5ErkJggg==';

export const excel = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANlSURBVGhD7dpZqIxhHMfxYy2y78sViitZcmONkKTkBjeKLBeUJblQSi4UroRQ4oILa3GBCFEkpXChbKFkC2UJ2Zfvb+Y85/x7+r9zZpp55z00v/p0Zt7nP++Z/znv+57nfebUpZwumIhVOIDbWIJmnX6YgXU4hsf441iKZpEWGIQ52IQzeAnvTXsyaaQNhmE+tuEyPsB7g8VKvZEOGINl2IMb+AbvzZQjtUYO4g5+wvvGlRYaGYfZZZqFnsjF+2ZpCo2cgjdequfoCHcwTZVuRHRKuANpSqMRHabuQJpqjRSQaSNJV63PeBNti52A3WemjSTlPZ7kHyZGMwq7z1oj5ahqI98xBHFOw6u/h9aw0fzMqw2N7MUjxy/8iLbF3sHus+BvRFeVOGPh1c6Fje5DXsOrDY1U9ao1DXEuwdbchKb2Njtha6xMGrkLTeVtpsLWTIfNCBSagIZGDuOtQzU6vLyx4AvsPos62VcgznVo7EruWWP0m7mGeB9WUye7alK5aunE6gEbTZ81Nj73rDGLEb8+llkjsgs2LXEy/7Ah3ZF0gluZNqJjfihsutV/DdkN77Wx0MhwTHGo5lW0LXYIdp9FNyIXkZRR0AnqvS4WGsl00jgJXo7Dq/dk3shDtIOXyfBe48m0kd/Q3w+bTvVfQ+LjNkloZAE2O1SjJSdvLIgv8UU3sh82nbEh/7AhWmksZs0rNJIU1aRy1dIlNf47shov0D73rDEr4e3DyqyRebDRIaU7OI2t1QaTVriFeB9WJo2cRZyNCOOa93SFzWjonLL7sUIj+iEcdahGt7veWKA5oN1nwUY+YQBsekPbbZ1+OnG05GprrNBI1a5aaxBnB+I6/fT6wkbTlXD4xaraiBawdbzb6KME3Tl69fFcTFkEr7aqjegYPB95AK9W1GBcfwHeuRIa0eq/zq+Yap5G22JbYffZ5MmehtBIUlST2uy3kv67RvpgoEM1+qjAGwviW4ZMG8ls9lsptUYKqDVSjko38hW5mcWz+g3VEhpJurEqhS7DE9AQfcSrO0DNSI/gPopdTChVaKRq0RRCC3DLsQ+afyXNtUpR9Ua8tMVILMR2XMVHeG84SbNoxItWHQdD/2SzBedQaMWx2TaSlP6YifXQulf4t6d/rhEvWmbtlX9YydTV/QVpuS0oF4k3JwAAAABJRU5ErkJggg==';

export const pdf = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM2SURBVGhD3dpJyE1hHMfxlwwRmUIpylDKxoZCFDKLjWHBAguWkhQKC5mnhQxhIyGlSAkLQ6aNUKYshIwbyUxm3991T/07XXWf5zzPeW5+9ene9957nvP833PPOc95zm2qM+2wBFfwCr8L+IZrmIRSMxFFO/8v+9Ea0TMTP1CrE6GcR0dES198Qn7Fz3Dd0xvk2xO91wlRcgB2ZSpgPIqkJz7DtptRMcG3TBt8RLaSrxiIEDkFW4B1A10QLINhV3AQobIHtu28O+iGINGh0Ta+AqGyC7btWu4hSDGTYRtehlCppxAJUkwjFCJ3UaiYRilEbqMDvNJIhcg5tIJzGq0QWQvnxCxkI2zb9dK5rB+cErMQdeY5bPv1WgqnxCxEaYne6FNDfwzFfDyF7ccOOCV2IfVGo2/bD+1fTilayEjcwgss1gueGQ7bj1ILaQ4V8Au6GtSjvkY+SVqIhupa5iY2V5/rK+KTpIV0hrbCS6yBll8AnyQtRNF1hZZ7VH2cDp8kL2QV7PK94JPkhXRFdkl7Xy94JnkhSnbNv7vyl18aopDT0LLa6XUA8EnyQjTktpMXh+CT5IVMgJY7Cp1P9HwGXJO8kH3QcrOhQeAHaBg+Gi5JWoiusTVDqaOWjl7KWKiQ91DnNKs4FSuxBTpc15r8S1rIemiZbZW//kbnkSPQ6zrr/6w+z9OQxiZZId3xDprj1T6hQ+9j2LYsFaQC1UFtsdewSVZItm98rz6KtoB2eG2hWRiGY8jety7CpvRCdLidC/uV0aT0HGT7ST7qpDp2CbqBtBe6QrQprRBNdi+CTnrZZ3U3ahxCpJRChuAh7Od0ja3iQiV6IbrFkN0E0ux59rl5CJnohWSH0uN4UH2u15ohZKIXshX2/ZNoi9CJXog6vQlnsBAtECOl7Oxl5L8tZDucUvg/ESgaCdh+LIdTdGfV/lBAv3wIdoOyzmii7zJsIVPgnLOwjVxAD5QRnVR3wq7/LbxOtiOgAV++scPQPY4NkWjM9QR2vVJoP12HfIMp6NabbkV4R2fq1chvmTKdQHsEySBoOPIFtVYWmi4HrmIaQg97KtHONgCjMCYSDUgdfynU1PQHMtjeZ6qiO4QAAAAASUVORK5CYII=';

export const defaultIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHdSURBVGhD7do9Sx1BFMbxa0BBiASRpEgXFQJpbLQIJEVACIlYCRb2fgNBBSsFia0kgaQMwVYs7JQU0c7Gly9gYidCCt+JL/9TDByWDezsntlscR74tWfm2bsLF2ZaBfMQU9jCMe4quMYORlFr3qHq5v9lBZ1InnH8Rd4mrGyjB8nShzNkF/4NeTXKOEF2njjAYyTJN+jFpMBbVMlTnEPPDZKUkff2FGGRKwzAIuvQBbR9mJYZgl7gO6zyBXp21i7MyryHHj4Hq3yGnp1nDyZlRqAHz8AqRYoIk2+mCUVE5TJNKSLkNXuEUmlSEbGJDkSnaUXEAqKTssgS9OyiLtGPqKQsIps5gp5f1DSikrKIpB3P0JvjOV5iEr+g9/ERUUldpGjk37feh3xfUWlKkVfQ+/AigRepGC8S4kWM40VCvIhxvEiIFzGOFwnxIsbxIiFexDheJMSLGMeLhHgR42SLLCMqlZ+EUSag9zGLqMgBvr4oIDcfnqDOPMBP6CKlrn1sQA/5ATknryNyPP4Jev0/KHXd4zVukR0m90fkjONDIl9xCL2uqPSdLiI78H+Qozc5iiidNswj+8vUaQ1dMMkgVnGBvMWs3WAbY5CHaR752F7gDYYTkTsv3YhIq3UP+xNmATtl2PgAAAAASUVORK5CYII=';

export const zip = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHdSURBVGhD7do9Sx1BFMbxa0BBiASRpEgXFQJpbLQIJEVACIlYCRb2fgNBBSsFia0kgaQMwVYs7JQU0c7Gly9gYidCCt+JL/9TDByWDezsntlscR74tWfm2bsLF2ZaBfMQU9jCMe4quMYORlFr3qHq5v9lBZ1InnH8Rd4mrGyjB8nShzNkF/4NeTXKOEF2njjAYyTJN+jFpMBbVMlTnEPPDZKUkff2FGGRKwzAIuvQBbR9mJYZgl7gO6zyBXp21i7MyryHHj4Hq3yGnp1nDyZlRqAHz8AqRYoIk2+mCUVE5TJNKSLkNXuEUmlSEbGJDkSnaUXEAqKTssgS9OyiLtGPqKQsIps5gp5f1DSikrKIpB3P0JvjOV5iEr+g9/ERUUldpGjk37feh3xfUWlKkVfQ+/AigRepGC8S4kWM40VCvIhxvEiIFzGOFwnxIsbxIiFexDheJMSLGMeLhHgR42SLLCMqlZ+EUSag9zGLqMgBvr4oIDcfnqDOPMBP6CKlrn1sQA/5ATknryNyPP4Jev0/KHXd4zVukR0m90fkjONDIl9xCL2uqPSdLiI78H+Qozc5iiidNswj+8vUaQ1dMMkgVnGBvMWs3WAbY5CHaR752F7gDYYTkTsv3YhIq3UP+xNmATtl2PgAAAAASUVORK5CYII=';
