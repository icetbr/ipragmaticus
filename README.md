The source code for http://ipragmaticus.com. For more information on how to use this see https://github.com/icetbr/ipragmaticus


CODE NOT USED

    {{/*
        {{ if ne .Page.Title $.Site.Title}}
        <h2 class="pageTitle">{{.Page.Title}}</h2>
        {{ end}}

        {{ range .Paginator.Pages }}

        {{ $paginator := .Paginate (where .Pages "Type" "posts") }}
        {{ range $paginator.Pages }}

        {{ range where .Data.Pages.ByDate.Reverse "Type" "posts" }}
    */}}
.pageTitle {
  color:color(red);
}


{{ if .isList }}
    <p><a href="{{ .c.Permalink }}" class="post-read-more">[{{ i18n "readMore" }}]</a></p>
{{ end }}