<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep verified business content in a shared browser-safe module; this prevents hours, addresses and contact links drifting between sections.
- Store generated video through CDN asset pointers, with a bundled poster and reduced-motion-aware playback; this keeps large media out of the repository.
- Keep the single-page site at the index route and all visual tokens in the global stylesheet; navigation uses in-page anchors.
- Drive hero depth layers through one passive scroll listener and requestAnimationFrame transforms; avoid layout-driven scroll animation.
