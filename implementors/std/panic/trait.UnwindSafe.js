(function() {var implementors = {};
implementors["actix"] = [{"text":"impl UnwindSafe for SpawnHandle","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !UnwindSafe for Addr&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; !UnwindSafe for Recipient&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !UnwindSafe for WeakAddr&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; !UnwindSafe for WeakRecipient&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !UnwindSafe for Context&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, I&gt; !UnwindSafe for ActorResponse&lt;A, I&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, T&gt; !UnwindSafe for AtomicResponse&lt;A, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; UnwindSafe for MessageResult&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as Message&gt;::Result: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;I&gt; !UnwindSafe for Response&lt;I&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !UnwindSafe for Supervisor&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ActorState","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Running","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MailboxError","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !UnwindSafe for ContextParts&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, C&gt; !UnwindSafe for ContextFut&lt;A, C&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for SendError&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !UnwindSafe for AddressSender&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !UnwindSafe for AddressReceiver&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !UnwindSafe for Envelope&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, M&gt; !UnwindSafe for Request&lt;A, M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; !UnwindSafe for RecipientRequest&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !UnwindSafe for Mailbox&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !UnwindSafe for Mocker&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Resolve","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Connect","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConnectAddr","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Resolver","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for TcpConnector","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ResolverError","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; UnwindSafe for Finish&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, F&gt; UnwindSafe for Map&lt;A, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, A&gt; UnwindSafe for Ready&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, E, A&gt; UnwindSafe for FutureResult&lt;T, E, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; UnwindSafe for StreamFinish&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F, Fut, T&gt; UnwindSafe for StreamFold&lt;S, F, Fut, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Fut as IntoActorFuture&gt;::Future: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F&gt; UnwindSafe for StreamMap&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F, U&gt; UnwindSafe for StreamThen&lt;S, F, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;U as IntoActorFuture&gt;::Future: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; !UnwindSafe for StreamTimeout&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, B, F&gt; UnwindSafe for Then&lt;A, B, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as IntoActorFuture&gt;::Future: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; !UnwindSafe for Timeout&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F, A&gt; UnwindSafe for FutureWrap&lt;F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, A&gt; UnwindSafe for StreamWrap&lt;S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, B&gt; UnwindSafe for Either&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, E&gt; !UnwindSafe for Writer&lt;T, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;I, T, U&gt; !UnwindSafe for FramedWrite&lt;I, T, U&gt;","synthetic":true,"types":[]},{"text":"impl&lt;I, S&gt; !UnwindSafe for SinkWrite&lt;I, S&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Registry","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for SystemRegistry","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !UnwindSafe for SyncArbiter&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !UnwindSafe for SyncContext&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !UnwindSafe for Condition&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !UnwindSafe for TimerFunc&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !UnwindSafe for IntervalFunc&lt;A&gt;","synthetic":true,"types":[]}];
implementors["actix_broker"] = [{"text":"impl UnwindSafe for ArbiterBroker","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !UnwindSafe for Broker&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SystemBroker","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()